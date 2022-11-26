interface AbnormalityCoordPolygon {
  type: string;
  coordinates: number[];
}

interface AbnormalityCoordPoint {
  type: string;
  coordinaltes: number;
}

interface Fields {
  annee_leve: string;
  geo_point_2d: number[];
  identifiant: string;
  info_complementaire: string;
  geo_shape: AbnormalityCoordPolygon | undefined;
  code_anomalie: string;
}

export interface AbnormalityInfos {
  datasetid: string;
  fields: Fields;
  record_timestamp: Date;
  recordid: string;
  geometry: AbnormalityCoordPoint;
}
