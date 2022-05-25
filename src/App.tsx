import React, {useState} from 'react';
import { TodoList } from './components/TodoList';
import { TodoListItem } from './components/TodoListItem';
import { AddTodoForm } from './components/AddTodoForm'

function App() {
  const initialTodos: Todo[] = [
    {text: "do a react app", completed: false},
    {text: "collect the rubbish", completed: true}
  ]

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos: Todo[] = todos.map(todo => {
      if(todo === selectedTodo) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })

    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodos = [
      ...todos,
      { text, completed: false}
    ]

    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleToddo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
