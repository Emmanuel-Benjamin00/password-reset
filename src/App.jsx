import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ForgetPassword from "./Components/ForgetPassword"
import ResetPassword from "./Components/ResetPassword"
import Error from "./Components/Error"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ForgetPassword/>}/>
          <Route path='/reset-link' element={<ResetPassword/>}/>
          <Route path='/error' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
