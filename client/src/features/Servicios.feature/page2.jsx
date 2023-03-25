import Register from "../../Components/Register/Register";
import LandingPage from "./LandingPage/LandingPage";
import Logos from "./logos/logos";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import PlanesAccecibles from "./PlanesAccesibles/PlanesAccecibles";
import PlanUnico from "./planUnico/PlanUnico";
import ProymentParaPotenciar from "./ProymentParaPotenciar/ProymentParaPotenciar";



export default function Page2() {


    return (
      <>
        <LandingPage/>
         <Logos></Logos>
         <PlanUnico></PlanUnico>
         <PlanesAccecibles></PlanesAccecibles>
         <NuestrosPlanes></NuestrosPlanes>
         <ProymentParaPotenciar/>
      </>
    );
  }
  


