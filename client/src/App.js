import Home from "./pages/Home/Home";
import Servicios from "./pages/servicios/servicios";
import {Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Marketing from "./pages/marketing/marketing";
import Confirmation from "./Components/Register/Confirmation";
import ServiciosIntegrales from "./pages/ServiciosIntegrales/ServiciosIntegrales";
import ServiciosAnalisisDeDatos from "./pages/ServiciosAnalisisDeDatos/ServiciosAnalisisDeDatos";
import EmpresasAmigas from "./features/ServiciosIntegrales.feature/EmpresasAmigas/EmpresasAmigas";

function App() {
  return (
    <>
        <Routes>
          <Route path={"/form"} element={<EmpresasAmigas></EmpresasAmigas>}></Route>
          <Route exact path={"/"} element={<Home></Home>}></Route>
          <Route exact path={"/PotenciamientoDeVentas"} element={<Servicios></Servicios>}></Route>
          <Route exact path={"/marketing"} element={<Marketing></Marketing>}></Route>
          <Route exact path={"/serviciosIntegrales"} element={<ServiciosIntegrales></ServiciosIntegrales>}></Route>
          <Route exact path={"/serviciosAnalisisDeDatos"} element={<ServiciosAnalisisDeDatos/>} ></Route>
          <Route exact path={"/confirmation"} element={<Confirmation/>} ></Route>

        </Routes>
    </> 
  );
}

export default App;
