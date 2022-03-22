import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import axios from 'axios';

function App() {

  return (
    <div className="todo-app">
    <TodoList />
    </div>
  );
}

export default App;
