import Todo from './components/Todos/Todo'
import TodoList from './components/Todos/TodoList'
import TodoForm from './components/Todos/TodoForm'
import Button from './components/UI/Button'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
