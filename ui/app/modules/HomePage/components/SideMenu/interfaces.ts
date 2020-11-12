export interface IProducts {
  [id: number]: IProduct;
}

export interface IProduct {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}
