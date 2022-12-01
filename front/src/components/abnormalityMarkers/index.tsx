import { Marker, Popup } from "react-leaflet";
import { LatLngTuple, Icon, Point } from "leaflet";

import { AbnormalityInfos } from "../../types";
import { VERIFIED_ANOMALIES, MOBILITY_ANOMALIES, BLIND_ANOMALIES } from "../../constants/verifiedAnomalies";
import MarkerIcon from "../../assets/market.png";
import BlindIcon from "../../assets/blind.png";

interface Props {
  abnormalityInfos: AbnormalityInfos[];
}

const AbnormalityMarkers = (props: Props) => {
  const jsxMap = [];

  const handicapIcon: Icon = new Icon({
    iconUrl: MarkerIcon,
    iconRetinaUrl: MarkerIcon,
    iconSize: new Point(22.5, 37.5),
  });
  const blindIcon: Icon = new Icon({
    iconUrl: BlindIcon,
    iconRetinaUrl: BlindIcon,
    iconSize: new Point(22.5, 37.5),
  });

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
      <Marker position={pointCoordinates} key={infos.recordid} icon={MOBILITY_ANOMALIES.includes(infos.fields.code_anomalie) ? handicapIcon : blindIcon}>
        <Popup>{infos.fields.code_anomalie}</Popup>
      </Marker>
    );
  }

  return <>{jsxMap}</>;
};

export default AbnormalityMarkers;
