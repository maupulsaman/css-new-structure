import styles from "./Box.module.scss";

export default function Box() {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Hello World</h2>
      <p className={styles.text}>
        This is a simple Box component.
      </p>
    </div>
  );
}