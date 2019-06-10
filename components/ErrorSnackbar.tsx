import { useStore, useActions } from "easy-peasy";
import * as React from "react";
import { Model } from "./snackbarStore";

export const ErrorSnackbar: React.FC<{}> = () => {
  const { open, message } = useStore<Model>(state => state.snackbar);
  const handleClose = useActions<Model>(
    actions => actions.snackbar.handleClose
  );

  return open ? (
    <div
      onClick={handleClose}
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#0d0d0d",
        padding: 10,
        color: "#fff"
      }}
    >
      {message}
    </div>
  ) : null;
};
