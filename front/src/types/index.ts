interface WorksiteCoordPolygon {
  type: string;
  coordinates: number[];
}

interface WorksiteCoordPoint {
  type: string;
  coordinaltes: number;
}

interface Fields {
  annee_leve: string;
  geo_point_2d: number[];
  identifiant: string;
  info_complementaire: string;
  geo_shape: WorksiteCoordPolygon | undefined;
  code_anomalie: string;
}

export interface WorksiteInfos {
  datasetid: string;
  fields: Fields;
  record_timestamp: Date;
  recordid: string;
  geometry: WorksiteCoordPoint;
}
