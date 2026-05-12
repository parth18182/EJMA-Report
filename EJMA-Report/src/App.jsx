import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstPage from './components/pages/FirstPage'
import { Route, Routes } from 'react-router-dom'
import SecondPage from './components/pages/SecondPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='next' element={<SecondPage />} />
    </Routes>
  )
}

export default App
