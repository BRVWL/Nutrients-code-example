import { sideMenuActions } from './actions';
// import { config } from './config';
// import {  } from './interfaces';

interface IinitialStore {
  selectMenuItem: number | null;
  error: any | null;
}

const initialState: IinitialStore = {
  selectMenuItem: null,
  error: null,
};

export const sideMenuReducer = (
  state: IinitialStore = initialState,
  { type, payload }: any,
) => {
  switch (type) {
    case sideMenuActions.selectMenuItem.SUCCESS:
      return {
        ...state,
        selectMenuItem: payload,
      };
    default:
      return state;
  }
};
