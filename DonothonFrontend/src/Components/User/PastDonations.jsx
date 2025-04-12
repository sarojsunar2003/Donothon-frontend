import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify'

export const PastDonation = () => {

    const [donations, setdonations] = useState([])

    const getDataByUserId = async () => {
        const res = await axios.get("/donation/getdatabyid/" + localStorage.getItem("id"))
        console.log(res)
        setdonations(res.data.data)
    }

    const DeleteById = async(id) => {
        console.log(id)
        const res = await axios.delete("/donation/deletedonation/"+id)
        
        res == 200 && toast.success('Post deleted!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        getDataByUserId()
    }

    useEffect(() => {
        getDataByUserId()
    }, [])

    return (

        donations == null ? <div style={{textAlign:"center",marginTop:"80px",fontSize:"larger"}}>not donated yet!<br/>Make Donation & feel Happy</div> :
        <div className="container text-center" style={{marginTop:'80px'}}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="row">
                {
                    donations?.map((donation) => {
                        return <div className="card" style={{width: "18rem",margin:'10px'}}>
                        <img src={donation.imageURL} className="card-img-top" alt="..." style={{borderRadius:'6px',marginTop:'15px'}}/>
                        <div className="card-body">
                          <h5 className="card-title">{donation.category}</h5><br/>
                          <p className="card-text">{donation.condition} -- {donation.description} -- {donation.quantity}</p>
                          <button onClick={()=>{DeleteById(donation._id)}} style={{backgroundColor:'lightblue'}}>Delete</button>
                        </div>
                      </div>
                    })
                }
            </div>
        </div>
    )
}
