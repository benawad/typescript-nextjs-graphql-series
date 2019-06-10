import { createStore, action, Action } from "easy-peasy";

export interface SnackbarModel {
  open: boolean;
  message: string;
  handleClose: Action<SnackbarModel, void>;
  handleOpen: Action<SnackbarModel, string>;
}

export interface Model {
  snackbar: SnackbarModel;
}

const model: Model = {
  snackbar: {
    open: false,
    message: "",
    handleClose: action(s => {
      s.open = false;
    }),
    handleOpen: action((s, message) => {
      s.open = true;
      s.message = message;
    })
  }
};

export const snackbarStore = createStore(model);
