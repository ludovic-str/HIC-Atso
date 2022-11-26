import "./index.css";
import { Button, Card, FormElement, Input } from "@nextui-org/react";
import React, { useState } from "react";
import L, { Control } from "leaflet";
import geocodeRequest from "../../api/geocoding";
import "leaflet-routing-machine";

interface Props {
  control: Control | null;
  setControl: React.Dispatch<React.SetStateAction<Control | null>>;
}

const ItineraryForm = (props: Props) => {
  const [start, setStart] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const createItinerary = (
    starting_x: number,
    starting_y: number,
    destination_x: number,
    destination_y: number
  ) => {
    if (props.control) {
      props.control.remove();
    }
    props.setControl(
      L.Routing.control({
        waypoints: [
          L.latLng(starting_x, starting_y),
          L.latLng(destination_x, destination_y),
        ],
      })
    );
  };

  const onStartingPointChange = (e: React.ChangeEvent<FormElement>) => {
    setStart(e.target.value);
  };

  const onDestinationPointChange = (e: React.ChangeEvent<FormElement>) => {
    setDestination(e.target.value);
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!start || !destination) {
      console.log("Error!");
      return;
    }
    const startCoordinate = await geocodeRequest(start);
    const endCoordinate = await geocodeRequest(destination);
    if (!startCoordinate || !endCoordinate) {
      console.log("Error!");
      return;
    }
    createItinerary(
      startCoordinate.lat,
      startCoordinate.lng,
      endCoordinate.lat,
      endCoordinate.lng
    );

    setDestination("");
    setStart("");
  };

  return (
    <Card
      css={{ width: "17vw", position: "absolute", top: "10px", left: "10px" }}
    >
      <Card.Body>
        <form className="container" onSubmit={onSubmitForm}>
          <Input
            placeholder="Starting point"
            value={start}
            onChange={onStartingPointChange}
          />
          <Input
            placeholder="Destination"
            value={destination}
            onChange={onDestinationPointChange}
          />
          <Button type="submit" disabled={!start || !destination}>
            Create itinerary
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default ItineraryForm;
