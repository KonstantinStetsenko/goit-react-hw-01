import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import "./components/Profile.css"
import "./components/FriendList.css"
import "./components/TransactionHistory.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
