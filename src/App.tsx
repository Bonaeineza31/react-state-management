import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import TaskManager from './components/TaskManager';
import { LIGHT_THEME } from './constants/theme';
import './App.css';

const MainApp = () => {
  const { theme } = useTheme();
  const themeClass = theme === LIGHT_THEME ? 'light-mode' : 'dark-mode';

  return (
    <div className={'app-wrapper ' + themeClass}>
      <Navbar />
      <main className='main-content'>
        <TaskManager />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
