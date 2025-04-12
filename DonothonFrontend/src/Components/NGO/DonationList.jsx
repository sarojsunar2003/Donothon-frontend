import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const DonationList = () => {

    const [donations, setdonations] = useState([])

    const getDataByUserId = async () => {
        const res = await axios.get("/donation/get/")
        setdonations(res.data.data)
    }

    const ApplyById = async (donation) => {
        donation.donationId = donation._id;
        donation.ngoId = localStorage.getItem("id")
        const res = await axios.post("/request/add",donation);
    }

    useEffect(() => {
        getDataByUserId()
    }, [])

    return (
        <div className="container text-center" style={{ marginTop: '80px' }}>
            <div className="row">
                {
                    donations?.map((donation) => {
                        return <div className="card" style={{ width: "18rem", margin: '10px' }}>
                            <img src={donation.imageURL} className="card-img-top" alt="..." style={{ borderRadius: '6px', marginTop: '15px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{donation.category}</h5><br />
                                <p className="card-text">{donation.condition} -- {donation.description} -- {donation.quantity}</p>
                                <button onClick={() => { ApplyById(donation); }} style={{ backgroundColor: 'lightblue' }}>Apply</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
