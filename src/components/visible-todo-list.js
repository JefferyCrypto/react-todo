import TodoList from './todo-list'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'

function filterTodos(todos, visibility) {
  switch(visibility) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(item => item.completed)
    case 'SHOW_NOT_COMPLETED':
      return todos.filter(item => !item.completed)
    default:
      return todos
  }
}

const mapStoreToProps = state => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
  mapStoreToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList