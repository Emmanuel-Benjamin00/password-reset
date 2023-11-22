import React, { useState } from 'react'
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../common/ApiService';

function SignUp() {
    let [name, setName] = useState("")
    let [mobile,setMobile] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [error , setError] = useState("")

    let createUser = async (e) => {
        e.preventDefault()
        try {
            let res = await AxiosService.post('/user', {
                name,
                mobile,
                email,
                password
            })
            if (res.status === 201) {
                navigate("/")
            }
        }
        catch (error) {
            console.log(error.response)
            setError("User Already Exists")
        }
    }

    let navigate = useNavigate()
    return <>
        <Container className='mt-5'>
            <div className='d-flex flex-column justify-content-center align-items-center '>
                <h1>SignUp</h1>
                <Form className='signup-form'>
                    <FormGroup className="mb-3">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl type="text" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Mobile</FormLabel>
                        <FormControl type="number" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setMobile(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <div id="signup-error" className='text-danger'>{error}</div>
                    <Button variant="primary" type="submit" className='button-login' onClick={(e)=>createUser(e)}>
                        Submit
                    </Button>
                </Form>
                <div className='mt-2 text-primary fs-6 pointer' onClick={()=>navigate("/")}>Back to Login Page</div>
            </div>
        </Container>
    </>
}

export default SignUp