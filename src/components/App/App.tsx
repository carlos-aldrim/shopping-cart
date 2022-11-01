import { Router } from "components/Router";
import { ValueContext, ValueProvider } from "contexts";
import React from "react";

export const App: React.FC = () => {

  return (
    <ValueProvider>
      <Router/>
    </ValueProvider>
  );
};