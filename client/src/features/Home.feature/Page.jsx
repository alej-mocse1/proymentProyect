import React from "react";
import Services from "./Services/Services";
import ADN from "./ADNProyment/ADN";
import OPT from "./OPTProyment/OPTProyment";
import LandinPage from "./ladinPage1/landinPage1";
import ServiciosAtuMedida from "./ServiciosAtuMedida/landinPage2";
import PorqueProyment from "./PorqueProyment/PorqueProyment";
import Transformation from "./Transformation/Transformation";
import LideresEnLatinoamerica from "./lideresEnLatinoamerica/LideresEnLatinoamerica";
import DesafíosDeTodoNivel from "./DesafíosDeTodoNivel/DesafíosDeTodoNivel";
import CompaniesFriendly from "./CompaniesFriendly/CompaniesFriendly";


export default function Page() {
  return (
    <>
      <LandinPage></LandinPage>
      <ADN></ADN>
      <OPT></OPT>
      <Services></Services>
      <ServiciosAtuMedida></ServiciosAtuMedida>
      <PorqueProyment></PorqueProyment>
      <Transformation></Transformation>
      <CompaniesFriendly></CompaniesFriendly>
      <LideresEnLatinoamerica></LideresEnLatinoamerica>
      <DesafíosDeTodoNivel></DesafíosDeTodoNivel>
    </>
  );
}
