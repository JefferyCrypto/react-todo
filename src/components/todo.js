import './todo.scss'

const Todo = ({text, onClick, completed}) => (
  <li
    className="todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through': 'none'
    }}
    >
      {text}
  </li>
)

export default Todo