import styles from "./index.module.css"

const App = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href="https://docs.google.com/document/d/1VbRGsf-39gTTFWbApv9aCJb9SkDoAN5zqkBS_O5Q-ps/edit?usp=sharing">
        Goolge
      </a>
      <a
        className={styles.link}
        href="https://disk.yandex.ru/edit/d/hKGlMpiwG16w24Gac7zP_iPegnqahzm72s0qoIz-cKg6TndIN01BMzcwQQ">
        Yandex
      </a>
    </div>
  )
}

export default App
