export interface StatusModel {
  nombre: string;
  status: string;
  codigo: number;
}

export interface statusDTO {
  hora_consulta: string;
  servicios: StatusModel[]
}
