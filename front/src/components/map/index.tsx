import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import fetchWorksites from "../../api/fetchWorksites";
import { AbnormalityInfos } from "../../types";
import AbnormalityPolygons from "../abnormalityMarkers";
import "./index.css";

const Map = () => {
  const [worksitesInfos, setWorksitesInfos] = useState<AbnormalityInfos[]>([]);

  useEffect(() => {
    fetchWorksites().then((infos) => {
      if (infos != null) {
        setWorksitesInfos(infos);
      }
    });
  }, []);

  return (
    <MapContainer
      center={[48.58322171431258, 7.773161392057082]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AbnormalityPolygons abnormalityInfos={worksitesInfos} />
    </MapContainer>
  );
};

export default Map;
