import { categoriesActions } from './actions';

interface IinitialStore {}

const initialState: any = {
  categories: {},
  error: null,
};

export const categoryReducer = (
  state: any = initialState,
  { type, payload }: any,
) => {
  switch (type) {
    case categoriesActions.getCategories.SUCCESS:
      return {
        ...state,
        categories: payload,
      };
    case categoriesActions.getCategories.FAILURE:
      return {
        ...state,
        error: payload,
      };
    case categoriesActions.clickOnCategory.SUCCESS:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
