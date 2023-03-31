import React from "react";
import ProducciónAudiovisual from "./ProducciónAudiovisual/ProducciónAudiovisual";
import ReclamosYPostVentas from "./ReclamosYPostVenta/ReclamosYPostVentas";
import CoCreaciónMVP from "./CoCreaciónMVP/CoCreaciónMVP"
import SumaDeEmpresas from "./SumaDeEmpresas/SumaDeEmpresas";
import LandingPage from "./LandingPage/LandingPage";

function Page6() {
  return (
    <>
    <LandingPage/>
      <ProducciónAudiovisual></ProducciónAudiovisual>
      <ReclamosYPostVentas></ReclamosYPostVentas>
      <CoCreaciónMVP></CoCreaciónMVP>
      <SumaDeEmpresas></SumaDeEmpresas>
    </>
  );
}

export default Page6;
