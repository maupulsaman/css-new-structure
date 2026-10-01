import { useState } from "react"
import eyeShow from "../../assets/svg/eye-show.svg"
import joinButton from "../../assets/login/join-button.svg"
import loginButton from "../../assets/login/login-button.svg"
import logo from "../../assets/svg/logo.svg"
import Button from "../../components/common/Button/Button"
import TextField from "../../components/common/TextField/TextField"
import styles from "./Login.module.scss"

export default function Login() {
  const [username, setUsername] = useState("Shashika")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const canLogin = username.trim() !== "" && password.trim() !== ""

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className={styles.screen}>
      <form className={styles.panel} onSubmit={handleSubmit}>
        <div className={styles.top}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <div className={styles.brand}>
                <img src={logo} alt="DFCC One" />
                <h1 className={styles.title}>Login</h1>
                <h2>TEST</h2>
              </div>
              <p className={styles.subtitle}>
                Enter your username and password to login
              </p>
            </div>
            <div className={styles.fields}>
              <TextField
                id="username"
                label="Username *"
                value={username}
                onChange={setUsername}
                autoComplete="username"
              />
              <TextField
                id="password"
                label="Password *"
                value={password}
                onChange={setPassword}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                accessory={
                  <button
                    className={styles.eye}
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((current) => !current)}
                  >
                    <img src={eyeShow} alt="" />
                  </button>
                }
              />
            </div>
          </div>
          <a className={styles.forgot} href="#forgot-login">
            Forgot login details?
          </a>
        </div>
        <div className={styles.actions}>
          <Button type="submit" variant="primary" background={loginButton} disabled={!canLogin}>
            Log In
          </Button>
          <Button variant="secondary" background={joinButton} href="#join">
            New to DFCC One? Join Now
          </Button>
        </div>
      </form>
    </main>
  )
}
