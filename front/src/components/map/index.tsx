import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import fetchWorksites from "../../api/fetchWorksites";
import { WorksiteInfos } from "../../types";
import "./index.css";
import ItineraryForm from "../itenaryForm";
import {Control} from "leaflet";

const Map = () => {
  const [worksitesInfos, setWorksitesInfos] = useState<WorksiteInfos[]>([]);
  const [control, setControl] = useState<Control | null>(null)

  useEffect(() => {
    fetchWorksites().then((infos) => {
      if (infos != null) {
        setWorksitesInfos(infos);
      }
    });
  }, []);

  console.log(worksitesInfos);

  return (
  <>
    <ItineraryForm control={control} setControl={setControl}/>
    <div className="container-map">
      <MapContainer
        center={[48.86195408599429, 2.3470007271109825]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>

  </>
  );
};

export default Map;
