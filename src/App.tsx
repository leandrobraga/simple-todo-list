import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import './global.css';
import styles from './App.module.css';
import { ListTasks } from './components/ListTasks';

export interface TaskToDo {
  id: number;
  checked: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState(Array<TaskToDo>);

  function createNewTaskToDo (description: string) {
    const taskWithSameDescription = tasks.filter((task) => {
      return task.description === description;
    });
    if (taskWithSameDescription.length === 0) {
      let id = 0;
      if (tasks.length !== 0) {
        id = tasks[tasks.length - 1].id + 1
      }
      setTasks([...tasks, {id, description, checked: false }])
    }
  }

  function deleteTask(taskToDelete: TaskToDo) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return taskToDelete.id !== task.id;
    })
    setTasks(tasksWithoutDeleteOne);
  }

  function updateTask(taskToUpdate: TaskToDo) {
    const tasksUpdates = tasks.filter((task) => {
      if (task.id === taskToUpdate.id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks(tasksUpdates);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <div>
          <NewTask onNewTask={createNewTaskToDo}  />
          <ListTasks tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask}/>
        </div>

      </main>
    </div>
  )
}

export default App
