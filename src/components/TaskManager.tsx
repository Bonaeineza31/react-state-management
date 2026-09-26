import { useReducer, useState } from 'react';
import { taskReducer, type Task } from '../reducers/taskReducer';
import { useTheme } from '../context/ThemeContext';
import { LIGHT_THEME } from '../constants/theme';
import styles from './TaskManager.module.css';

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [] as Task[]);
  const [task, setTask] = useState('');
  const { theme } = useTheme();

  const addTask = () => {
    if (!task.trim()) return;
    dispatch({ type: 'add', payload: task });
    setTask('');
  };

  const themeClass = theme === LIGHT_THEME ? styles.light : styles.dark;

  return (
    <div className={styles.container + ' ' + themeClass}>
      <h2>Task Manager</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task...'
      />
      <button onClick={addTask} disabled={!task.trim()}>
        Add Task
      </button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => dispatch({ type: 'remove', payload: t.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
