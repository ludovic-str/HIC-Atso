import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import fetchWorksites from "../../api/fetchWorksites";
import { AbnormalityInfos } from "../../types";
import AbnormalityPolygons from "../abnormalityMarkers";
import "./index.css";
import ItineraryForm from "../itenaryForm";
import { Control } from "leaflet";
import AddItinerary from "../addItinerary";

const Map = () => {
  const [worksitesInfos, setWorksitesInfos] = useState<AbnormalityInfos[]>([]);
  const [control, setControl] = useState<Control | null>(null);

  useEffect(() => {
    fetchWorksites().then((infos) => {
      if (infos != null) {
        setWorksitesInfos(infos);
      }
    });
  }, []);

  return (
    <>
      <ItineraryForm control={control} setControl={setControl} />
      <div className="container-map">
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
          {/*<AddItinerary control={control} />*/}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
