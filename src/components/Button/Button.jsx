import styles from './Button.module.css';

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btnPrimary}>
      {text}
    </button>
  );
}