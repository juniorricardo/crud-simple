import React from 'react'
import Home from './components/Home'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './components/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="row mx-2 my-2">
        <Counter /> 
        <Home />
      </div>
    </Provider>
  )
}

export default App
