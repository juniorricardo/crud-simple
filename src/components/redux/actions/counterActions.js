/* Estos actions, seran ejecutados en el componente
es recomendable que en lo posible sean pocos, los 
datos con el que se trabajara  */

// 'payload' sera el nuevo estado
export const increment_action = (payload) => ({
  type: 'INCREMENT',
  payload
})

export const decrement_action = () => ({
  type: 'DECREMENT'
})