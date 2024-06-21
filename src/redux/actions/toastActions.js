// src/redux/actions/toastActions.js
export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export const addToast = (message) => ({
  type: ADD_TOAST,
  payload: { id: Date.now(), message },
});

export const removeToast = (id) => ({
  type: REMOVE_TOAST,
  payload: { id },
});
