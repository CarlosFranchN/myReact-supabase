
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Layout } from './components/Layout'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path='/create' />

          </Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App