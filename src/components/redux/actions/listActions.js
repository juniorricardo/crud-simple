export const add_todo = (todo) => ({
  type: 'ADD_TODO',
  todo
})

export const remove_todo = (id) => ({
  type: 'REMOVE_TODO',
  id
})

export const edit_todo = (todo) => ({
  type: 'EDIT_TODO',
  description: todo.description,
  id: todo.id
})