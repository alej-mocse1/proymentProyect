import React from "react";
import ProducciónAudiovisual from "./ProducciónAudiovisual/ProducciónAudiovisual";
import ReclamosYPostVentas from "./ReclamosYPostVenta/ReclamosYPostVentas";
import CoCreaciónMVP from "./CoCreaciónMVP/CoCreaciónMVP"
import SumaDeEmpresas from "./SumaDeEmpresas/SumaDeEmpresas";
import LandingPage from "./LandingPage/LandingPage";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";

function Page6() {
  return (
    <>
    <LandingPage/>
      <ProducciónAudiovisual></ProducciónAudiovisual>
      <ReclamosYPostVentas></ReclamosYPostVentas>
      <CoCreaciónMVP></CoCreaciónMVP>
      <SumaDeEmpresas></SumaDeEmpresas>
      <NuestrosPlanes></NuestrosPlanes>
    </>
  );
}

export default Page6;
