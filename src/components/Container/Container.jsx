import styles from './Container.module.css';

export default function Container({ title, children }) {
  return (
    <div className={styles.glassContainer}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.insetPanel}>
        {children}
      </div>
    </div>
  );
}