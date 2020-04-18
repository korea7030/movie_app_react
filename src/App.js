import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return <HashRouter>
    {/* 링크를 쓰려는 component는 반드시 Router안에 있어야 함 */}
    <Navigation /> 
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie-detail" component={Detail} />
  </HashRouter>
}

export default App;