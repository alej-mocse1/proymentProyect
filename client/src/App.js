import Home from "./pages/Home/Home";
import Servicios from "./pages/servicios/servicios";
import {Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import MetodologíasDeTrabajo from "./features/Servicios.feature/MetodologíasDeTrabajo/MetodologíasDeTrabajo";

function App() {
  return (
    <>
        <Routes>
          <Route path={"/form"} element={<MetodologíasDeTrabajo></MetodologíasDeTrabajo>}></Route>
          <Route exact path={"/"} element={<Home></Home>}></Route>
          <Route exact path={"/Servicios"} element={<Servicios></Servicios>}></Route>
        </Routes>
    </> 
  );
}

export default App;
