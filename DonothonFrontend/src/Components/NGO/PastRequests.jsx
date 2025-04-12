import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const PastRequests = () => {

  const [requests, setrequests] = useState([])

  useEffect(() => {
    getRequest()
  }, [])


  
  const getRequest = async () => {
    const res = await axios.get("/request/getu/" + localStorage.getItem('id'))
    setrequests(res.data.data)
    console.log(res.data.data)
  }

  return (
    <div className="container text-center" style={{ marginTop: '80px' }}>
      <div className='row'>
        {
          requests.map((request) => {
            return <div className="card" style={{ width: "18rem", margin: '10px' }}>
              <img src={request.imageURL} className="card-img-top" alt="..." style={{ borderRadius: '6px', marginTop: '15px' }} />
              <div className="card-body">
                <h5 className="card-title">{request.donorId.name}</h5><br />
                <p className="card-text">{request.donationId?.condition} -- {request.donationId?.description} -- {request.donationId?.quantity}</p>
                <button onClick={() => { DeleteById(request._id) }} style={{ backgroundColor: 'lightblue' }}>Delete</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
