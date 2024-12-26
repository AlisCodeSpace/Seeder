import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'

import { store } from "./app/store.js";
import { Provider } from 'react-redux'
import { GlobalProvider } from './contexts/GlobalContexts.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <GlobalProvider>
          <App />
        </GlobalProvider>
    </Provider>
  </StrictMode>
)
