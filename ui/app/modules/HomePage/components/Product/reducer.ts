import { productsActions } from './actions';

interface IinitialStore {}

const initialState: IinitialStore = {
  products: {},
  error: null,
};

export const productReducer = (
  state: IinitialStore = initialState,
  { type, payload }: any,
) => {
  switch (type) {
    case productsActions.addProducts.SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case productsActions.addProducts.FAILURE:
      return {
        ...state,
        error: payload,
      };
    case productsActions.getProducts.SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case productsActions.getProducts.FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
