import { addTodo } from '../redux/actions'
import { connect } from 'react-redux'


let AddTodo = ({dispatch}) => {

  let input
  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <input ref={node => input = node}></input>
      <button type="submit"> Add</button>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo