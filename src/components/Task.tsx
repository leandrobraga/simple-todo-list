import { Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';

import { TaskToDo } from '../App';

import styles from './Task.module.css';

interface TaskProps {
  task: TaskToDo;
  onDeleteTask: (task: TaskToDo) => void;
}

export function Task({task, onDeleteTask}: TaskProps) {
  function handleCheckedTask(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.taskCheckBox} onChange={handleCheckedTask} />
      <p>{task.description}</p>
      <button onClick={handleDeleteTask}><Trash size={24}/></button>
    </div>
  );
}
