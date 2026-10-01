import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Hello World</h2>
      <p className={styles.text}>This is a simple Card component.</p>
    </div>
  );
}


