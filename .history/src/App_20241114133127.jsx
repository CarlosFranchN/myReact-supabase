
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<} >
            <Route index element={<Home/>} />

          </Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
