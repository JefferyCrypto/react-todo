let id = 1

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: id++,
  text
})

export const toggleTodo = id => (
  {
    type: 'TOGGLE_TODO',
    id
  }
)

export const setVisibilityFilter = filter => (
  {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
)