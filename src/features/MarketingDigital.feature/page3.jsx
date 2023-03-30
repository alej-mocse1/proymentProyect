import Auditoria from "./Auditoria/Auditoria";
import SeoYSem from "./SeoYSem/SeoYSem";
import Marketing from "./Marketing/Marketing";
import NuestroDiferencial from "./NuestroDiferencial/NuestroDiferencial";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import Objetivos from "./objetivo/Objetivo";
import TransformarEmpresas from "./TransformarEmpresas/TransformarEmpresas";
import LandingPageMarkentig from "./landingPageMarketing/LandingPageMarkentig";
import SomosDiferentes from "./SomosDiferentes/SomosDiferentes"
import Logos from "./Logos/Logos"
import SocialMedia from "./SocialMedia/SocialMedia";


export default function Page3() {
    return (
      <>
        <LandingPageMarkentig></LandingPageMarkentig>
        <Objetivos></Objetivos>
        <SocialMedia></SocialMedia>
        <Marketing/>
        <SeoYSem></SeoYSem>
        <Auditoria/>
        <NuestrosPlanes/>
        <NuestroDiferencial/>
        <TransformarEmpresas/>
        <Logos></Logos>
        <SomosDiferentes></SomosDiferentes>
      </>
    );
  }
