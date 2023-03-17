import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import LandinPage from '../../features/Home.feature/ladinPage1/landinPage1'
import Page from "../../features/Home.feature/Page";
import ServiciosAtuMedida from "../../features/Home.feature/ServiciosAtuMedida/landinPage2";
import PorqueProyment from "../../features/Home.feature/PorqueProyment/PorqueProyment";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandinPage></LandinPage>
      <Page></Page>
      <ServiciosAtuMedida></ServiciosAtuMedida>
      <PorqueProyment></PorqueProyment>
      <Footer></Footer>
    </>
  );
}
