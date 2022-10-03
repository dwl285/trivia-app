import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import blobTop from './assets/blob-top.png'
import blobBottom from './assets/blob-bottom.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src={blobTop} className="blob-top"/>
    <img src={blobBottom} className="blob-bottom"/>
    <App />
  </React.StrictMode>
)
