import styles from "./Form.module.scss";
import officePersons from "./assets/img 01.png";
import { Link } from "react-router-dom";

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
        </div>
        <img src={officePersons} alt="Persons in an office"></img>
      </div>
    </>
  );
}
