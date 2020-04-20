/* -> Inicializar los propiedad o estado del reducer */
const initialState = {
  count: 0
}

/* REDUCER->
-deternima el estado inicial del state y la acciones <!-- */
export default function (state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}



/* -> Action: en mayuscula y dos palabras
  Caso(type) y nuevo valores */
