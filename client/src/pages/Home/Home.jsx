import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import LandinPage from "../../features/Home.feature/ladinPage1/landinPage1";
import Page from "../../features/Home.feature/Page";
import ServiciosAtuMedida from "../../features/Home.feature/ServiciosAtuMedida/landinPage2";
import PorqueProyment from "../../features/Home.feature/PorqueProyment/PorqueProyment";
import Transformation from "../../features/Home.feature/Transformation/Transformation";
import LideresEnLatinoamerica from "../../features/Home.feature/lideresEnLatinoamerica/LideresEnLatinoamerica";
import DesafíosDeTodoNivel from "../../features/Home.feature/DesafíosDeTodoNivel/DesafíosDeTodoNivel";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandinPage></LandinPage>
      <Page></Page>
      <ServiciosAtuMedida></ServiciosAtuMedida>
      <PorqueProyment></PorqueProyment>
      <Transformation />
      <LideresEnLatinoamerica></LideresEnLatinoamerica>
      <DesafíosDeTodoNivel></DesafíosDeTodoNivel>
      <Footer></Footer>
    </>
  );
}
