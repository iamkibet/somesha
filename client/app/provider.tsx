import React, { ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "../redux/store";

interface providerProps {
  children: ReactNode;
}

export function Providers({ children }: providerProps) {
  return <Provider store={store}>{children}</Provider>;
}
