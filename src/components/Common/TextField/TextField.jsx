import { useState } from "react"
import styles from "./TextField.module.scss"

export default function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  accessory,
}) {
  const [focused, setFocused] = useState(false)
  const floated = focused || value.length > 0

  return (
    <div className={styles.field}>
      <input
        id={id}
        className={accessory ? `${styles.control} ${styles.controlWithIcon}` : styles.control}
        type={type}
        value={value}
        placeholder={floated ? undefined : label}
        autoComplete={autoComplete}
        aria-required="true"
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label className={floated ? styles.label : styles.labelHidden} htmlFor={id}>
        {label}
      </label>
      {accessory}
    </div>
  )
}
