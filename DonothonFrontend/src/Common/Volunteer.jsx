import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Volunteer = () => {


    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const submitHandler = async (data) => {
        data.role = '67efc3acf1162add4ce86493'
        await axios.post("/addUser",data)
        navigate('/')
    }


    return (
        <div className="form-group" style={{width:'100vw',display:'flex',justifyContent:"center"}}>
            <div style={{width:'500px'}}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>Name</label>
                <input type="text" name="Name" placeholder="Enter  Name" {...register('name')} />
                

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter Email" {...register('email')} />
                    
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phone" placeholder="Enter Phone Number" {...register('number')} />
                    
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Password" {...register('password')} />
                    
                </div>
                <button type='submit'>Register</button>
            </form>
            </div>
        </div>
    )
}
