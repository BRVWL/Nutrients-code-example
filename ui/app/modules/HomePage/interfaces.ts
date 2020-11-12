export interface IHomeState {
  sideMenu: ISideMenu;
  product: IProductSore;
  category: ICategoryStore;
}

export interface ISideMenu {
  selectMenuItem: number | null;
  error: any | null;
}
export interface IProductSore {
  products: {
    [id: number]: IProduct;
  };
  error: any | null;
}

export interface IProduct {
  id: number;
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  categoryId: number;
  category: ICategory;
}

export interface ICategoryStore {
  categories: {
    [id: number]: ICategory;
  };
  error: any | null;
}

export interface ICategory {
  id: number;
  name: string;
  isOpen: boolean;
  produts: IProduct[];
}
