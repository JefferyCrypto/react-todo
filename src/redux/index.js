import todos from './reducers/todos'
import visibleFilter from './reducers/visible-filter'
import { combineReducers } from 'redux'

const todoApp = combineReducers({
  todos,
  visibleFilter
})

export default todoApp