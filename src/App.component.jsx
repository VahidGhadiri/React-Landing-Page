import React from "react";
import "./App.styles.css";
import Header from "./component/Header.component";
import Place from "./component/place.component"


const App = () => (
  <div className="root">
    <Header/>
    <Place/>
  </div>
);

export default App;
