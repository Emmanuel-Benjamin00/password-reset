import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ForgetPassword from "./Components/ForgetPassword"
import ResetPassword from "./Components/ResetPassword"
import Error from "./Components/Error"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/reset-link' element={<ResetPassword/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
