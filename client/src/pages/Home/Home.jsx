import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import Page from "../../features/Home.feature/Page";
import Carrusel from "../../features/Home.feature/Transformation/Carrusel";

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Page></Page>
      <Carrusel/>
      <Footer></Footer>
    </>
  );
}
