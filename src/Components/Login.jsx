import React , {useState} from 'react'
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../common/ApiService';

function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let handleLogin = async (e) => {
        e.preventDefault()
        try {
          let res = await AxiosService.post('/user/login', {
            email,
            password
          })
          if (res.status === 200) {    
              navigate('/dashboard')
          }
        } catch (error) {
          document.getElementById("error").innerHTML = "UIser does not Exists or Invalid Password"
          console.log(error.response)
        }
      }

 
    return <>
        <Container className='login-form-cont'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1>Login</h1>
                <Form className='login-form'>
                    <FormGroup className="mb-3">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <div id='error' className='text-danger fw-bold '></div>
                    <Button variant="primary" type="submit" className='button-login' onClick={(e)=>handleLogin(e)}>
                        Submit
                    </Button>
                </Form>
               
                <div className='pointer' onClick={()=>navigate("/forgetpassword")}>Forgot Password</div>
                <div className='mt-4 text-primary fs-5 pointer'  onClick={()=>navigate("/signup")}>New User? SignUp</div>
            </div>
        </Container>
    </>
}

export default Login