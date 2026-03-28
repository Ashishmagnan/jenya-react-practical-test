import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProductList from './pages/productList'
import CrudPage from './pages/CRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
