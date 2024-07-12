import React, { ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "./components/Route/Footer";

interface providerProps {
  children: ReactNode;
}

export function Providers({ children }: providerProps) {
  return <Provider store={store}>{children}</Provider>;
}
