import { Control } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface Props {
  control: Control | null;
}

const AddItinerary = (props: Props) => {
  const map = useMap();
  useEffect(() => {
    if (props.control) {
      props.control.addTo(map);
    }
  }, [props.control, map]);

  return <></>;
};

export default AddItinerary;
