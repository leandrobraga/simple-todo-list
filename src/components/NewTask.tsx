import styles from './NewTask.module.css';

import Plus from '../assets/plus.svg';

export function NewTask() {
  return (
    <form className={styles.newTask}>
      <input placeholder='Adicione uma nova tarefa' />
      <button type="submit">
        <span>Criar</span>
        <img src={Plus} alt="Logo Simple Todo list" />
      </button>
    </form>
  );
}
