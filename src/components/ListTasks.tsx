import Clipboard from '../assets/clipboard.svg';

import { TaskToDo } from '../App';
import styles from './ListTasks.module.css';
import { Task } from './Task';

interface ListTasksProps {
  tasks: TaskToDo[];
  onDeleteTask: (task: TaskToDo) => void;
  onUpdateTask: (task: TaskToDo) => void;
}

export function ListTasks({ tasks, onDeleteTask, onUpdateTask }: ListTasksProps) {
  const tasksCompleted = tasks.filter((task) => {
    return task.checked
  });
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <span className={styles.created}>
          Tarefas Criadas
          <span className={styles.counter}>{ tasks.length }</span>
        </span>
        <span className={styles.done}>
          Concluídas
          <span className={styles.counter}>{ tasksCompleted.length } de { tasks.length }</span>
        </span>
      </div>
      {
        tasks.length === 0 ?
          <div className={styles.empty}>
            <img src={Clipboard} alt="Clipboard" />
            <p className={styles.firstLine}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.secondLine}>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          tasks.map(task => <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />)
      }
    </div>
  );
}
