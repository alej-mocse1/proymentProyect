import Home from "./pages/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import LandinPage from "./features/Home.feature/ladinPage1/landinPage1";
import ADN from "./features/Home.feature/ADNProyment/ADN";
import LandinPage2 from "./features/Home.feature/landinpage2/landinPage2";
import OPT from "./features/Home.feature/OPTProyment/OPTProyment";
import Services from "./features/Home.feature/Services/Services";
import PorqueProyment from "./features/Home.feature/PorqueProyment/PorqueProyment";
import Transformation from "./features/Home.feature/Transformation/Transformation";
import CompaniesFriendly from "./features/Home.feature/CompaniesFriendlY/CompaniesFriendly.jsx";
import LideresEnLationamerica from "./features/Home.feature/LideresEnLatinoamerica/LideresEnLatinoamerica"
import Footer from "./Components/Footer/Footer";
import DesafíosDeTodoNivel from "./features/Home.feature/DesafíosDeTodoNivel/DesafíosDeTodoNivel";
//comment
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandinPage />
      <ADN />
      <OPT />
      <Services />
      <LandinPage2 />
      <PorqueProyment />
      <Transformation />
      <CompaniesFriendly />
      <LideresEnLationamerica/>
      <DesafíosDeTodoNivel/>
      <Footer/>
    </div>
  );
}

export default App;
