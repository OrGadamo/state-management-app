import { createContext, useReducer } from "react";
import {
  counterReducer,
  initialState,
} from "../store/reducers/counter-reducer";
export const counterContext = createContext();
export default function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  return (
    <counterContext.Provider value={{ count, dispatch }}>
      {children}
    </counterContext.Provider>
  );
}
