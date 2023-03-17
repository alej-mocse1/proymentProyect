import React from "react";
import Services from "./Services/Services";
import ADN from "./ADNProyment/ADN";
import OPT from "./OPTProyment/OPTProyment";
import LandinPage from "./ladinPage1/landinPage1";
import LandinPage2 from "./landinpage2/landinPage2";
import PorqueProyment from "./PorqueProyment/PorqueProyment";
import Transformation from "./Transformation/Transformation";
import CompaniesFriendly from "./CompaniesFriendlY/CompaniesFriendly";
import DesafíosDeTodoNivel from "./DesafíosDeTodoNivel/DesafíosDeTodoNivel";
import LideresEnLationamerica from "./lideresEnLatinoamerica/LideresEnLatinoamerica"

export default function Page() {
  return (
    <>
      <LandinPage />
      <ADN></ADN>
      <OPT></OPT>
      <Services></Services>
      <LandinPage2 />
      <PorqueProyment />
      {/* <Transformation /> */}
      <CompaniesFriendly />
      <LideresEnLationamerica />
      <DesafíosDeTodoNivel />
    </>
  );
}