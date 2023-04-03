import LandingPageServiciosUXUI from "./LandingPageServiciosUXUI/LandingPageServiciosUXUI";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import ServiciosQuePrestamos from "./ServiciosQuePrestamos/ServiciosQuePrestamos";

export default function Page7() {
  return (
    <>
      <LandingPageServiciosUXUI />
      <ServiciosQuePrestamos />
      {/* Componnente de Jose */}
      <NuestrosPlanes />
    </>
  );
}
