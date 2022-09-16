import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from './context'
import { GlobalStyle } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <App/>
    </Provider>
  </React.StrictMode>
)
