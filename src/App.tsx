import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import './global.css';
import styles from './App.module.css';
import { ListTasks } from './components/ListTasks';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <div>
          <NewTask />
          <ListTasks />
        </div>

      </main>
    </div>
  )
}

export default App
