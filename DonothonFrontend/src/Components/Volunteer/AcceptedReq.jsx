import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AcceptedReq = () => {

    const [data, setdata] = useState([])

    const getData = async()=>{
        const res = await axios.get("/transport/get/"+localStorage.getItem('id'))
        setdata(res.data.data)
        console.log(res.data.data)
    }

    useEffect(() => {
      getData()
    }, [])
    

  return (
    <div style={{width: '80vw', margin: '100px auto', display: 'flex', justifyContent: 'center' }}>
    {
        data.map((d) => {
            return <div className="card" style={{width: "18rem",margin:'10px'}}>
                <img src={d?.historyId?.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                   
                <p className="card-text">From : {d?.historyId?.address}</p>
                    <p className="card-text">To : {d?.historyId?.ngoId.address}</p>
                    <button onClick={()=>{onAccept(d)}} className="btn btn-primary">Accept</button>
                </div>
            </div>
        })
    }
</div>
  )
}
