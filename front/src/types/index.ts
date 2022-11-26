interface WorksiteCoordPolygon {
  type: string;
  coordinates: number[][][];
}

interface WorksiteCoordPoint {
  type: string;
  coordinaltes: number;
}

interface Fields {
  chantier_categorie: string;
  chantier_cite_id: string;
  chantier_synthese: string;
  cp_arrondissement: string;
  date_debut: string;
  date_fin: string;
  demande_cite_id: string;
  geo_point_2d: number[];
  geo_shape: WorksiteCoordPolygon | undefined;
  localisation_detail: string;
  moa_principal: string;
  num_emprise: string;
  surface: number;
}

export interface WorksiteInfos {
  datasetid: string;
  fields: Fields;
  record_timestamp: Date;
  recordid: string;
  geometry: WorksiteCoordPoint;
}
