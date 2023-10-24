import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AxiosService from '../common/ApiService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

function ResetPassword() {
  let [pass1, setpass1] = useState("")
  let [pass2, setpass2] = useState("")

  console.log(pass1)
  console.log(pass2)

  let [messageColor, setMessageColor] = useState("black")
  let [messagetext, setMessagetext] = useState("")

  const navigate = useNavigate()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token');
  const email = searchParams.get('email')

  async function validateToken() {
    try {
      let res = await AxiosService.get('/user/getUsers')
      console.log(res)
      const reqUser = res.data.users.find(user => user.email === email)
      if (reqUser) {
        const tokenCheck = reqUser.randomString === token
        if (tokenCheck) {
          console.log("Correct Token")
        }
        else {
          navigate('/error')
        }
      }
    }
    catch (error) {
      console.log(error)
    }
  }


  let resetSubmit = async (e) => {
    const pass1inp = document.getElementById('password1');
    const pass2inp = document.getElementById('password2');
    const button = document.getElementById('reset-button');


    e.preventDefault()
    try {
      let res = await AxiosService.put('/user/resetPassword', {
        email,
        pass1,
        pass2
      })
      if (res.status === 200) {
        pass1inp.blur()
        pass2inp.blur()
        pass1inp.style.color = "gray"
        pass1inp.style.pointerEvents = 'none';
        pass2inp.style.color = "gray"
        pass2inp.style.pointerEvents = 'none';
        button.disabled = true;
        setMessageColor("green")
        setMessagetext("Password updated successfully")
        toast.success('Password updated successfully')
      }
    }
    catch (error) {
      pass1inp.style.pointerEvents = 'auto';
      pass2inp.style.pointerEvents = 'auto';
      button.disabled = false;
      console.log(error)
      toast.error(error.response.data || "Password and confirm password doesnt match")
      setMessageColor("red")
      setMessagetext("Empty field or passwords not matching in fields please enter correctly")
    }
  }

  useEffect(() => {
    validateToken()
  }, [])

  return (
    <>
      <div className='postman position-absolute top-0 end-0 m-5 p-3 col-sm-12 col-md-3'>
        <a className="btn btn-warning col-sm-12" href="https://documenter.getpostman.com/view/30441359/2s9YRCYCBV" target="blank" type="submit" id="button" >Postman Documentation</a>
        <p className='para'>Use Postman for <br /><span> 1. Creating User(To create a user)</span> <br /><span>2. List all users with their password(To check whether the password is changed).</span> </p>
      </div>
      <div className='d-flex align-items-center justify-content-center flex-column mt-5' style={{ height: '100vh' }} >
        <h1 className='fs-2 mb-3'>Reset Password</h1>
        <form className='col-md-3 col-xxl-5'>
          <div className="mb-3" id="formBasicPassword1">
            <label htmlFor="password1" className='my-2 ms-1'>Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Password" onChange={(e) => setpass1(e.target.value)} />
          </div>

          <div className="mb-3" id="formBasicPassword2">
            <label htmlFor="password2" className='my-2 ms-1'>Confirm Password</label>
            <input type="password" className="form-control" id="password2" placeholder="Confirm Password" onChange={(e) => setpass2(e.target.value)} />
          </div>

          <small className="form-text" id="message" style={{ color: messageColor }}>{messagetext}</small>

          <button className="btn btn-primary mt-2" type="submit" id="reset-button" style={{ width: '100%' }} onClick={(e) => resetSubmit(e)}>Reset Password</button>
        </form>
      </div>
    </>
  )
}

export default ResetPassword