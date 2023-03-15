import Navbar from "../Components/NavBar/NavBar";
import LandinPage from './ladinPage1/landinPage1'
import Page from "./Page/Page";
import LandinPage2 from "./landinpage2/landinPage2";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandinPage></LandinPage>
      <Page></Page>
      <LandinPage2></LandinPage2>
    </>
  );
}
