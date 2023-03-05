import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>

      <div className="container">
        <h1>To-Do App</h1>
        <TaskForm />
        <div className="tasks">
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
