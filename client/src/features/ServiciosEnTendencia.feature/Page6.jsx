import React from "react";
import ProducciónAudiovisual from "./ProducciónAudiovisual/ProducciónAudiovisual";
import ReclamosYPostVentas from "./ReclamosYPostVenta/ReclamosYPostVentas";
import CoCreaciónMVP from "./CoCreaciónMVP/CoCreaciónMVP"
import SumaDeEmpresas from "./SumaDeEmpresas/SumaDeEmpresas";
import LandingPage from "./LandingPage/LandingPage";
import ProducAtencion from "./ProducAtencion/ProducAtencion";

function Page6() {
  return (
    <>
    <LandingPage/>
    <ProducAtencion/>
      <ProducciónAudiovisual></ProducciónAudiovisual>
      <ReclamosYPostVentas></ReclamosYPostVentas>
      <CoCreaciónMVP></CoCreaciónMVP>
      <SumaDeEmpresas></SumaDeEmpresas>
    </>
  );
}

export default Page6;
