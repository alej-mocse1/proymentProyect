import Auditoria from "./Auditoria/Auditoria";
import LandingPageMarkentig from "./landingPageMarketing/LandingPageMarkentig";
import Marketing from "./Marketing/Marketing";
import Objetivos from "./objetivo/Objetivo";


export default function Page3() {
    return (
      <>
        {/* <LandingPageMarkentig></LandingPageMarkentig> */}
        <Objetivos></Objetivos>
        <Marketing/>
        <Auditoria/>
      </>
    );
  }