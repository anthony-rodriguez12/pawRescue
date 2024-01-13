export interface Animal {
  id: number;
  img: string;
  name: string;
  status: boolean;
  age: number;
}

export interface AnimalI extends Pets {
  loadingImg: boolean;
  errorImg: boolean;
}

export interface Pets {
  idAnimal: number;
  nombre: string;
  saludDesc: string;
  sexo: string;
  foto: string;
  idTipo: number;
  idEstado: number;
  idEstadoSalud: number;
}

export interface GeneralResponse<T> {
  data: T;
}
