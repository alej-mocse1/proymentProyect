import styles from "./Form.module.scss";
import officePersons from "./assets/img 01.png";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import logo from "./assets/logoPrueba.svg"

var info = {
  tittle: (<img src={logo} alt="not" />)
}

export default function Form() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentform}>
          <Link to="/">
            <button>
              <i className="ri-arrow-left-line"></i> Volver
            </button>
          </Link>
          <div className={styles.form}>
          <Register info={info} />
          </div>
        </div>
        <div className={styles.containerImg}>
          <img src={officePersons} alt="Persons in an office"></img>
        </div>
      </div>
    </>
  );
}
