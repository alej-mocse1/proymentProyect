import Auditoria from "./Auditoria/Auditoria";
import SeoYSem from "./SeoYSem/SeoYSem";
import Marketing from "./Marketing/Marketing";
import NuestroDiferencial from "./NuestroDiferencial/NuestroDiferencial";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import Objetivos from "./objetivo/Objetivo";
import TransformarEmpresas from "./TransformarEmpresas/TransformarEmpresas";


export default function Page3() {
    return (
      <>
      {/* Falta Componente Formulario (lo tiene Franz) */}
        <Objetivos></Objetivos>
        {/* Falta Componente  Social Media*/}
        <Marketing/>
        <SeoYSem/>
        <Auditoria/>
        <NuestrosPlanes/>
        <NuestroDiferencial/>{/* Falta estilos? */}
        <TransformarEmpresas/>
        {/*Componente Logos y Somos Diferentes */}
      </>
    );
  }