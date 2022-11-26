import "./index.css";
import {Button, Card, FormElement, Input} from "@nextui-org/react";
import React, {useState} from "react";
import L, {Control} from "leaflet";

interface Props {
    control: Control | null
    setControl:  React.Dispatch<React.SetStateAction<Control | null>>
}

const ItineraryForm = (props: Props) => {
    const [start, setStart] = useState<string>("");
    const [destination, setDestination] = useState<string>("");

    const createItinerary = (starting_x: number, starting_y: number, destination_x: number, destination_y: number) => {
        if (props.control) {
            props.control.remove()
        }
        props.setControl(L.Routing.control({
            waypoints: [
                L.latLng(starting_x, starting_y),
                L.latLng(48.9, 2.15),
                L.latLng(destination_x, destination_y)
            ],
        }))
        /*control =
        control.addTo(map)*/
    }

    const onStartingPointChange = (e: React.ChangeEvent<FormElement>) => {
        setStart(e.target.value)
    }

    const onDestinationPointChange = (e: React.ChangeEvent<FormElement>) => {
        setDestination(e.target.value)
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!start || !destination)
            console.log("Error!")

    }

    return (
        <Card css={{ width: "17vw", position: "absolute" }}>
            <Card.Body>
                <form className="container" onSubmit={onSubmitForm}>
                    <Input placeholder="Starting point" value={start} onChange={onStartingPointChange}/>
                    <Input placeholder="Destination" value={destination} onChange={onDestinationPointChange} />
                    <Button type="submit">Create itinerary</Button>
                </form>
            </Card.Body>
        </Card>

    )
}

export default ItineraryForm;