import React from "react";
import { Routing } from './routes/Routing';
import { Navigation } from "./components/Navigation";


function App() {
  return (
    <div>
      <Routing>
        <Navigation />
      </Routing>
    </div>
  )
}

export default App;
