import React from "react";
import { Routing } from './routes/Routing';
import { Navigation } from "./components/Navigation";
import { GlobalStyles } from "./shared/styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routing>
        <Navigation />
      </Routing>
    </div>
  )
}

export default App;
