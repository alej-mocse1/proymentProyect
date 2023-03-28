import Auditoria from "./Auditoria/Auditoria";
import Marketing from "./Marketing/Marketing";
import NuestroDiferencial from "./NuestroDiferencial/NuestroDiferencial";
import Objetivos from "./objetivo/Objetivo";


export default function Page3() {
    return (
      <>
        <Objetivos></Objetivos>
        <Marketing/>
        <Auditoria/>
        <NuestroDiferencial/>
      </>
    );
  }