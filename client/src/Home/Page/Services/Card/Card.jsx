
export default function Card({ info }) {
  return (
    <div key={info.id} className={styles.card}>
      <img src={info.img} alt="Img" className={styles.img} />
      <div className={styles.text}>
        <h6>{info.title}</h6>
        <p>{info.description}</p>
        <a href="#Ver">Ver más</a>
      </div>
    </div>
  );
}
