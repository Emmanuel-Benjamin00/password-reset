import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    let navigate = useNavigate()
    return (<>
        <div className='d-flex justify-content-center align-items-center fs-3 flex-column gap-4' style={{ height: "100vh" }}>
            <div ><b>Logged in Successfully</b></div>
            <Button onClick={()=>navigate("/")}>Logout</Button>
        </div>
    </>
    )
}

export default Dashboard