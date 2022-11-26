import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import fetchWorksites from "../../api/fetchWorksites";
import { WorksiteInfos } from "../../types";
import WorksitesPolygons from "../worksitesPolygons";
import "./index.css";

const Map = () => {
  const [worksitesInfos, setWorksitesInfos] = useState<WorksiteInfos[]>([]);

  useEffect(() => {
    fetchWorksites().then((infos) => {
      if (infos != null) {
        setWorksitesInfos(infos);
      }
    });
  }, []);

  return (
    <MapContainer
      center={[48.86195408599429, 2.3470007271109825]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <WorksitesPolygons worksitesInfos={worksitesInfos} />
      <Marker position={[48.86195408599429, 2.3470007271109825]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
