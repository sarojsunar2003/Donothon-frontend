import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const RequestedDonation = () => {

    const [requests, setrequests] = useState([])

    const getAllRequest = async () => {
        const res = await axios.get("/request/get/" + localStorage.getItem('id'))
        console.log(res)
        setrequests(res.data.data)
    }

    const onAcceptreq = async (id) => {
        const res = await axios.get("/request/update/"+id)
        console.log(res)
    }

    useEffect(() => {
        getAllRequest()
    }, [])


    return (
        <div className="container text-center" style={{ marginTop: '80px' }}>
            <div className="row">
                {
                    requests.map((request) => {
                        return <div className="card" style={{ width: "18rem", margin: '10px',padding:'10px  ' }}>
                            <img src={request.imageURL} className="card-img-top" alt="..." style={{borderRadius:'6px',marginTop:'15px'}}/><br/>
                            <p>NGO name :{request.ngoId.name}</p>
                            <p>NGO number :{request.ngoId.number}</p>
                            <button type="button" className="btn btn-success" style={{margin:'10px'}} onClick={()=>{onAcceptreq(request._id)}}>Success</button>
                            <button type="button" className="btn btn-danger" style={{margin:'10px'}}>Decline</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
