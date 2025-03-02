import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'

import { store } from "./app/store.js";
import { Provider } from 'react-redux'
import {NextUIProvider} from '@nextui-org/react'
import { GlobalProvider } from './contexts/GlobalContexts.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <GlobalProvider>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </GlobalProvider>
      </UserProvider>
    </Provider>
  </StrictMode>
)
