
import Card from "./Card/Card";
import styles from "./Home.module.css";
import { info } from "./assets/info";
import Navbar from "../../Components/NavBar/NavBar";

export default function Home() {
  return (
      <div >
     <Navbar></Navbar>
    <div className={styles.container}>
      <div className={styles.container1}>
        <h4 className={styles.h4}>ADN Proyment</h4>
        <p className={styles.p}>
          Alcanzamos de forma correcta la transformación empresarial en base a
          la
          <br></br>
          innovación y el potenciamiento a escala
        </p>
      </div>
      <div className={styles.cards}>
        {info.length
          ? info.map((info) => <Card key={info.id} info={info} />)
          : "loading"}
      </div>
    </div>
       </div>
  );
}







 



