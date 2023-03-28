import Auditoria from "./Auditoria/Auditoria";
import AuditoriaPerformance from "./AuditoriaPerformance/AuditoriaPerformance";
import Marketing from "./Marketing/Marketing";
import NuestroDiferencial from "./NuestroDiferencial/NuestroDiferencial";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import Objetivos from "./objetivo/Objetivo";
import TransformarEmpresas from "./TransformarEmpresas/TransformarEmpresas";


export default function Page3() {
    return (
      <>
        <Objetivos></Objetivos>
        {/* Falta Componente */}
        <Marketing/>
        <AuditoriaPerformance/>
        {/* Falta Componente */}
        <Auditoria/>
        <NuestrosPlanes/>
        <NuestroDiferencial/>{/* Falta estilos? */}
        <TransformarEmpresas/>
        {/* Falta Componente */}
        {/* Falta Componente */}
      </>
    );
  }