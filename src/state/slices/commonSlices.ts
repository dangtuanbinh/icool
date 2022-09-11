import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Common {
  showAlert: boolean;
  alertMessage: string;
  showSpinner: boolean;
  spinnerMessage: string;
}

const initialState: Common = {
  showAlert: false,
  alertMessage: "",
  showSpinner: false,
  spinnerMessage: "",
};

const commonState = createSlice({
  name: "common",
  initialState,
  reducers: {
    showAlert: (state: Common, action: PayloadAction<any>) => {
      const { message } = action.payload;
      state.showAlert = true;
      state.alertMessage = message;
    },
    hideAlert: (state: Common, action: PayloadAction) => {
      state.showAlert = false;
    },
    showSpinner: (state: Common, action: PayloadAction<any>) => {
      const { message } = action.payload;
      state.showSpinner = true;
      state.spinnerMessage = message;
    },
    hideSpinner: (state: Common, action: PayloadAction) => {
      state.showSpinner = false;
    },
  },
});

const { reducer, actions } = commonState;
export const { showAlert, showSpinner, hideAlert, hideSpinner } = actions;
export default reducer;
