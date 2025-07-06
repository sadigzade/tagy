import styles from "./index.module.css"

const App = () => {
  const handleRedirect = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={handleRedirect}>
        Click me
      </button>
    </div>
  )
}

export default App
