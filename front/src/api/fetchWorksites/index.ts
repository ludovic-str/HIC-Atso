import axios from "axios";
import { AbnormalityInfos } from "../../types";

const fetchWorksites = async (): Promise<AbnormalityInfos[] | null> => {
  const url =
    "https://data.strasbourg.eu/api/records/1.0/search/?dataset=vo_gp_anom_espub_pmr&rows=500";
  try {
    const data = (await axios.get(url)).data.records as AbnormalityInfos[];

    return data;
  } catch (e) {
    return null;
  }
};

export default fetchWorksites;
