import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[],
    toggleToddo: ToggleTodo
}

export const TodoList: React.FC<Props> = ({todos, toggleToddo}) => {
    return (<ul>
        {todos.map(todo => (
            <TodoListItem 
            key={todo.text} 
            todo={todo} 
            toggleTodo={toggleToddo} />
        ))}
    </ul>)
}