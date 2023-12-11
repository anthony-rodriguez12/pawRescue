export interface Animal {
  id: number;
  img: string;
  name: string;
  status: boolean;
  age: number;
}

export interface AnimalI extends Animal {
  loadingImg: boolean;
  errorImg: boolean;
}