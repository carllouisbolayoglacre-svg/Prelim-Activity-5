import styles from './Input.module.css';

export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className={styles.inputElement} 
      />
    </div>
  );
}