import { Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import { AbnormalityInfos } from "../../types";
import { VERIFIED_ANOMALIES } from "../../constants/verifiedAnomalies";

interface Props {
  abnormalityInfos: AbnormalityInfos[];
}

const AbnormalityMarkers = (props: Props) => {
  const jsxMap = [];

  for (const infos of props.abnormalityInfos) {
    if (
      infos.fields.geo_shape === undefined ||
      !VERIFIED_ANOMALIES.includes(infos.fields.code_anomalie)
    )
      continue;

    const pointCoordinates = [
      infos.fields.geo_shape.coordinates[1],
      infos.fields.geo_shape.coordinates[0],
    ] as LatLngTuple;

    jsxMap.push(
      <Marker position={pointCoordinates} key={infos.recordid}>
        <Popup>{infos.fields.code_anomalie}</Popup>
      </Marker>
    );
  }

  return <>{jsxMap}</>;
};

export default AbnormalityMarkers;
