
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
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
