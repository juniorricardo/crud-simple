import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import shortid from 'shortid'
import { add_todo, remove_todo, edit_todo } from './redux/actions/listActions'

const Home = () => {
  const { re_todos } = useSelector(state => ({
    re_todos: state.todos
  }))
  const dispatch = useDispatch()

  const [todo, setTodo] = React.useState('')
  const [id, setId] = React.useState('')
  const [editMode, setEditMode] = React.useState(false)

  const addTodo = e => {
    e.preventDefault()
    dispatch(add_todo({ description: todo, id: shortid.generate() }))
    setTodo('')
  }

  const edit = item => {
    setEditMode(true)
    setTodo(item.description)
    setId(item.id)
  }

  const editTodo = e => {
    e.preventDefault()
    dispatch(edit_todo({ description: todo, id }))
    setEditMode(false)
    setTodo('')
    setId('')
  }

  const deleteTodo = id => {
    dispatch(remove_todo(id))
  }

  return (
    <div className='col-md text-center bg-light pb-2 card'>
      <h1>Todos</h1>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-center'>{editMode ? 'Edit todo' : 'Add todo'}</h4>
          <form onSubmit={editMode ? editTodo : addTodo}>
            <input
              type='text'
              className='form-control mb-2'
              placeholder='Input todo'
              onChange={e => setTodo(e.target.value)}
              value={todo}
              required
            />
            <button
              className={`btn btn-block btn-${editMode ? 'warning' : 'dark'}`}
              type='submit'
            >
              {editMode ? 'Save changes' : 'Add'}
            </button>
          </form>
        </div>
        <div className='col-8'>
          <h4 className='text-center'>List todos</h4>
          <ul className='list-group'>
            {re_todos.map((t, index) => (
              <li className='list-group-item text-left' key={t.id}>
                <span className='badge bg-dark text-light mr-2'>
                  {index + 1}
                </span>
                <span className='lead'>{t.description}</span>
                <button
                  className='btn btn-sm btn-warning float-right'
                  onClick={() => edit(t)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-sm btn-danger float-right mx-2'
                  onClick={() => deleteTodo(t.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
