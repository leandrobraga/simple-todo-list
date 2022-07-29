import Clipboard from '../assets/clipboard.svg';

import styles from './ListTasks.module.css';
import { Task } from './Task';

export function ListTasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <span className={styles.created}>
          Tarefas Criadas
          <span className={styles.counter}>0</span>
        </span>
        <span className={styles.done}>
          Concluídas
          <span className={styles.counter}>2 de 5</span>
        </span>
      </div>
      <div>
        <div className={styles.empty}>
          <img src={Clipboard} alt="Clipboard" />
          <p className={styles.firstLine}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.secondLine}>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <Task />
      </div>
    </div>
  );
}
