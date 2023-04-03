import React from "react";
import ProducciónAudiovisual from "./ProducciónAudiovisual/ProducciónAudiovisual";
import ReclamosYPostVentas from "./ReclamosYPostVenta/ReclamosYPostVentas";
import CoCreaciónMVP from "./CoCreaciónMVP/CoCreaciónMVP"
import SumaDeEmpresas from "./SumaDeEmpresas/SumaDeEmpresas";
import LandingPage from "./LandingPage/LandingPage";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import ProducAtencion from "./ProducAtencion/ProducAtencion";
import LasEmpresasConfianEnNosotros from "./LasEmpresasConfianEnNosotros/LasEmpresasConfianEnNosotros";


function Page6() {
  return (
    <>
      <LandingPage/>
      <ProducAtencion/>
      <ProducciónAudiovisual></ProducciónAudiovisual>
      <ReclamosYPostVentas></ReclamosYPostVentas>
      <CoCreaciónMVP></CoCreaciónMVP>
      <NuestrosPlanes></NuestrosPlanes>
      <LasEmpresasConfianEnNosotros></LasEmpresasConfianEnNosotros>
      <SumaDeEmpresas></SumaDeEmpresas>
    </>
  );
}

export default Page6;
