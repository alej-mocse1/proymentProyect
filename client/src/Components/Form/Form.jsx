import styles from "./Form.module.scss";
import officePersons from "./assets/img 01.png";

export default function Form() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentform}>
          <button>
            <i className="ri-arrow-left-line"></i> Volver
          </button>
        </div>
        <img src={officePersons} alt="Persons in an office"></img>
      </div>
    </>
  );
}
