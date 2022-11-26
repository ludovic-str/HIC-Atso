import axios from "axios";
import { WorksiteInfos } from "../../types";

const fetchWorksites = async (): Promise<WorksiteInfos[] | null> => {
  const url =
    "https://data.strasbourg.eu/api/records/1.0/search/?dataset=vo_gp_anom_espub_pmr&rows=1000";
  try {
    const data = (await axios.get(url)).data.records as WorksiteInfos[];

    return data;
  } catch (e) {
    return null;
  }
};

export default fetchWorksites;
