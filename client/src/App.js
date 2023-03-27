import Home from "./pages/Home/Home";
import Servicios from "./pages/servicios/servicios";
import {Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Confirmation from "./Components/Register/Confirmation";

function App() {
  return (
    <>
        <Routes>
          <Route path={"/form"} element={<Form></Form>}></Route>
          <Route exact path={"/"} element={<Home></Home>}></Route>
          <Route exact path={"/Servicios"} element={<Servicios></Servicios>}></Route>
          <Route exact path={"/confirmation"} element={<Confirmation/>} ></Route>
        </Routes>
    </>
  );
}

export default App;
