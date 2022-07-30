import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

import { PlusCircle } from 'phosphor-react';

interface NewTaskProps {
  onNewTask: (description: string) => void;
}

export function NewTask({ onNewTask }: NewTaskProps) {
  const [newTaskToDo, setNewTaskToDo] = useState('');

  function handleCreateNewTaskToDo(event: FormEvent) {
    event.preventDefault();
    onNewTask(newTaskToDo);
    setNewTaskToDo('');
  }

  function handleNewtaskToDo(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTaskToDo(event.target.value)
  }

  const isNewtaskToDoEmpty = newTaskToDo.length === 0;

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTaskToDo}>
      <input name="newTaskToDo" placeholder='Adicione uma nova tarefa' value={newTaskToDo} onChange={handleNewtaskToDo}/>
      <button type="submit" disabled={isNewtaskToDoEmpty}>
        Criar
        <PlusCircle weight="bold" size={22} className={styles.iconPlus}/>
      </button>
    </form>
  );
}
