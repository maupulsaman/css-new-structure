import caretDown from "../../../assets/svg/caret-down.svg"
import fieldStyles from "../TextField/TextField.module.scss"
import styles from "./Select.module.scss"

export default function Select({ id, label, value, onChange, options }) {
  const floated = value.length > 0

  return (
    <div className={fieldStyles.field}>
      <select
        id={id}
        className={`${fieldStyles.control} ${fieldStyles.controlWithIcon} ${styles.select}`}
        value={value}
        aria-required="true"
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label className={floated ? fieldStyles.label : fieldStyles.labelHidden} htmlFor={id}>
        {label}
      </label>
      <span className={styles.caret} aria-hidden="true">
        <img src={caretDown} alt="" />
      </span>
    </div>
  )
}
