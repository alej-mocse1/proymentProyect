import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import LandinPage from '../../features/Home.feature/ladinPage1/landinPage1'
import Page from "../../features/Home.feature/Page";
import LandinPage2 from "../../features/Home.feature/landinpage2/landinPage2";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandinPage></LandinPage>
      <Page></Page>
      <LandinPage2></LandinPage2>
      <Footer></Footer>
    </>
  );
}
