import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import "./components/FriendList/FriendList"
import "./components/Profile/Profile"
import "./components/TransactionHistory/TransactionHistory"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
