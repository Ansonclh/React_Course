import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider means using Redux store in the application */}
      <App />
    </Provider>
  </React.StrictMode>, //StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.
  //Basically no impact on production build but helps in development to identify potential issues
)
