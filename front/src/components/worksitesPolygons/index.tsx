import { useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";

import { WorksiteInfos } from "../../types";

interface Props {
  worksitesInfos: WorksiteInfos[];
}

const WorksitesPolygons = (props: Props) => {
  const map = useMap();

  for (const infos of props.worksitesInfos) {
    if (
      infos.fields.geo_shape === undefined ||
      !infos.fields.localisation_detail.includes("EMPRISE_TROTTOIR")
    )
      continue;
    const polygonCoordinates = infos.fields.geo_shape.coordinates[0];

    const coordArray: LatLngTuple[] = polygonCoordinates.map((coord) => [
      coord[1],
      coord[0],
    ]);

    L.polygon(coordArray, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.2,
    }).addTo(map);
  }

  return <></>;
};

export default WorksitesPolygons;
