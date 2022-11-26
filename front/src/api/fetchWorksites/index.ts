import axios from "axios";
import { WorksiteInfos } from "../../types";

const fetchWorksites = async (): Promise<WorksiteInfos[] | null> => {
  const url =
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=chantiers-a-paris&q=&facet=cp_arrondissement&facet=date_debut&facet=date_fin&facet=chantier_categorie&facet=moa_principal&facet=chantier_synthese&facet=localisation_detail&facet=localisation_stationnement&rows=1";

  try {
    const data = (await axios.get(url)).data.records as WorksiteInfos[];

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default fetchWorksites;
