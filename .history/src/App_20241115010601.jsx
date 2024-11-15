
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Layout } from './components/Layout'
import { Create } from './pages/Create'



function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path='/create' element={<Create/>} />

          </Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
