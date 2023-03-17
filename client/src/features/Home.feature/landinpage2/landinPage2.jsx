import style from "./landinpage2.module.css";
import IMG from "./IMG.png";

const LandinPage2 = () => {
  return (
    <div className={style.div}>
      <div className={style.divIMG}>
        <img src={IMG} alt="assests1" />
      </div>

      <div className={style.divText}>
        <h2>Servicios a tu medida</h2>
        <p>
          ¿Lo mejor? Puedes elegir nuestros servicios profesionales o los que
          mas se adapten a tu empresa
        </p>
        <button>Agendar reunion</button>
      </div>
    </div>
  );
};

export default LandinPage2;
