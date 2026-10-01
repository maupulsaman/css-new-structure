import styles from "./Button.module.scss"

export default function Button({
  children,
  variant = "primary",
  background,
  disabled = false,
  type = "button",
  href,
}) {
  const className = `${styles.button} ${styles[variant]}`
  const content = (
    <>
      {background ? <img src={background} alt="" /> : null}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button className={className} type={type} disabled={disabled}>
      {content}
    </button>
  )
}
