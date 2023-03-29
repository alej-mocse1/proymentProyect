import Auditoria from "./Auditoria/Auditoria";
import SeoYSem from "./SeoYSem/SeoYSem";
import Marketing from "./Marketing/Marketing";
import NuestroDiferencial from "./NuestroDiferencial/NuestroDiferencial";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import Objetivos from "./objetivo/Objetivo";
import TransformarEmpresas from "./TransformarEmpresas/TransformarEmpresas";
import LandingPageMarkentig from "./landingPageMarketing/LandingPageMarkentig";


export default function Page3() {
    return (
      <>
       <LandingPageMarkentig></LandingPageMarkentig>
        <Objetivos></Objetivos>
        <Marketing/>
        <SeoYSem></SeoYSem>
        <Auditoria/>
        <NuestrosPlanes/>
        <NuestroDiferencial/>
        <TransformarEmpresas/>
      </>
    );
  }