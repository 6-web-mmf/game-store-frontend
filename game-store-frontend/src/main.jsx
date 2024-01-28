import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
    <App />
=======
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
>>>>>>> e3a9074f7b2544254142ab089da44b4be6aef7b0
)
