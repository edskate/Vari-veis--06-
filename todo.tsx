// create a functional that renders a list of todos

export const TodoList = (props) => {

    
    return (
        <ul>
            {props.todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                </li>
            ))}
        </ul>
    )
}