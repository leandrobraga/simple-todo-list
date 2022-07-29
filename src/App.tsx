import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <div >
          <NewTask />
          <div>
            Principal
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
