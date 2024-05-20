import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './REDUX/store.js'
import { Provider } from 'react-redux'
import 'react-tagsinput/react-tagsinput.css'
import 'react-quill/dist/quill.snow.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
