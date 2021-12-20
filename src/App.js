/** @jsxImportSource @emotion/react */

import React from "react";
import { BrowserRouter, Route,} from "react-router-dom";

import Top from "./pages/Top/Top";

function App() {
  return (
    <Top/>
    /**<BrowserRouter>
      <Route exact path='/' component={Top}/>
      <Route>
        <p>Page is not found</p>
      </Route>
    </BrowserRouter>*/
  );
}

export default App;
