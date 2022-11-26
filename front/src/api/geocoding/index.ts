import axios from "axios";
import {GeocodeLatLng} from "../../types";

const geocodeRequest =  async(address: string): Promise<GeocodeLatLng | null> => {
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=ijzBM2QwTFw0TdSZ3awlJx4Cx54AalNs&location=${address.replaceAll(' ', '+')}`

    try {
        const data = (await axios.get(url)).data.results[0].locations[0].latLng as GeocodeLatLng

        return data
    }
    catch (e) {
        return null;
    }
};

export default geocodeRequest;