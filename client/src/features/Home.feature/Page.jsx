import React from "react";
import Services from "./Services/Services";
import ADN from "./ADNProyment/ADN";
import OPT from "./OPTProyment/OPTProyment";

export default function Page() {
  return (
    <>
      <ADN></ADN>
      <OPT></OPT>
      <Services></Services>
    </>
  );
}
