const initTodos = []
export default function (state = initTodos, action) {
  console.log('reducer', action)
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.todo])
    case 'REMOVE_TODO':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_TODO':
      debugger
      const lista = state.map((item) => item.id === action.id ?
        {
          description: action.description,
          id: action.id
        }
        : item)
      console.log(lista)
      return lista
    default:
      return state
  }
}