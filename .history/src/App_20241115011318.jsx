
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
        {/* Rotas de Autenticação */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </BrowserRouter>      
    </>
  )
}

export default App
