import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import Page from "../../features/Home.feature/Page";
import Page2 from "../../features/Servicios.feature/page2";

import { Route, Routes } from 'react-router-dom';


export default function Home() {
  return (
    <>

<Navbar></Navbar>


<Routes>
   <Route path="/" element={<Page />} />
   <Route path="/servicios" element={<Page2 />} />

</Routes>



<Footer></Footer>

    </>
  );
}
