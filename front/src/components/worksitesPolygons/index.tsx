import { Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import { WorksiteInfos } from "../../types";

interface Props {
  worksitesInfos: WorksiteInfos[];
}

const WorksitesPolygons = (props: Props) => {
  const jsxMap = [];

  for (const infos of props.worksitesInfos) {
    if (infos.fields.geo_shape === undefined) continue;
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

export default WorksitesPolygons;
