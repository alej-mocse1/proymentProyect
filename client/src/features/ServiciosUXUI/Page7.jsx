import SeguimientoDeDiseño from "./SeguimientoDeDiseño/SeguimientoDeDiseño";
import Icons from "./Icons/Icons";
import MásEmpresas from "./MásEmrpesas/MásEmpresas";
import LandingPageServiciosUXUI from "./LandingPageServiciosUXUI/LandingPageServiciosUXUI";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import ServiciosQuePrestamos from "./ServiciosQuePrestamos/ServiciosQuePrestamos";
import EtapasDuracion from "./EtapasDuracion/EtapasDuracion"
import OpinionClientes from "./LoQueClientesOpinan/OpinionClientes";

export default function Page7() {
  return (
    <>

      <LandingPageServiciosUXUI /> 
      <ServiciosQuePrestamos />
      <SeguimientoDeDiseño />
      <NuestrosPlanes />
      <EtapasDuracion/>
      <Icons />
      <OpinionClientes></OpinionClientes>
      <MásEmpresas />
    </>
  );
}
