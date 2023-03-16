import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/NavBar";
import LandinPage from './ladinPage1/landinPage1'
import Page from "./Page/Page";
import ServiciosAtuMedida from "./ServiciosAtuMedida/landinPage2";
import PorqueProyment from "./PorqueProyment/PorqueProyment"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandinPage></LandinPage>
      <Page></Page>
      <ServiciosAtuMedida></ServiciosAtuMedida>
      <PorqueProyment></PorqueProyment>
      {/* <Footer></Footer> */}
    </>
  );
}
