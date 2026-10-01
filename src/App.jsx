import { useEffect, useState } from 'react'
import Login from './pages/Login/Login'
import styles from './App.module.scss'
import './styles/globals.scss'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <Login />
      <button className={styles.toggle} type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  )
}

export default App
