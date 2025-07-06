import styles from "./index.module.css"

const App = () => {
  const handleRedirect = () => {
    window.location.href =
      "https://docs.google.com/document/d/1VbRGsf-39gTTFWbApv9aCJb9SkDoAN5zqkBS_O5Q-ps/edit?usp=sharing"
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={handleRedirect}>
        ТЫ ЧОРТ
      </button>
    </div>
  )
}

export default App
