import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UseContextProvider } from "./component/use_Contexts.jsx";

// 4 - wrap all app with provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseContextProvider>
    <App />
    </UseContextProvider>
    
  </React.StrictMode>,
)
