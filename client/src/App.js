import Home from "./pages/Home/Home";
import {Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";

function App() {
  return (
    <>
        {/* <Routes>
          <Route path={"/form"} element={<Form></Form>}></Route>
          <Route exact path={"/"} element={<Home></Home>}></Route>
        </Routes> */}
        <Home></Home>
    </>
  );
}

export default App;
