
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthLayout } from './Layouts/AuthLayout'
import Login from './components/Login'




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
