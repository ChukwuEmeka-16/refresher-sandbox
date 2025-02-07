import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {library} from '@fortawesome/fontawesome-svg-core'
import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './states/store.js'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </StrictMode>
)
