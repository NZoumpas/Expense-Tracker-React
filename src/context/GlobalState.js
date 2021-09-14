import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Aρχική κατασταση
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component - Παροχός συστατικών το οποίο θα τυλίξει τα παιδιά του / children στο αρχειο app.js
export const GlobalProvider = ({ children }) => {
  // reducer - δράση μείωσης
  const [state, dispatch] = useReducer(AppReducer, initialState); // usereducer πέρνει ορίσματα file AppReducer and initialState(αρχική κατάσταση)

  // ACTIONS - DELETE
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  // ACTIONS - ADD
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    // Tα στοιχεία απο file app.js {children}
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
