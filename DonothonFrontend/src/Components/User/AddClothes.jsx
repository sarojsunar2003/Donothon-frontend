import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer, Bounce } from 'react-toastify'
import { Loader1 } from '../Loaders/Loader1'

export const AddClothes = () => {

    const { register, handleSubmit } = useForm()
    const [donationFlag, setdonationFlag] = useState(false)



    // /* Logic of get city, area from state */

    // const [state, setstate] = useState([])
    // const [city, setcity] = useState([])
    // const [area, setarea] = useState([])

    // useEffect(() => {
    //     getState();
    // }, [])

    // const getState = async () => {
    //     const res = await axios.get("/state/get")
    //     setstate(res.data.data)
    //     console.log(res.data.data)
    // }

    // const getCityById = async (stateid) => {
    //     try {
    //         if (!stateid) return;
    //         const res = await axios.get("/city/getcitybystate/" + stateid)
    //         console.log(res.data.data)
    //         setcity(res.data.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const getAreaByCity = async (areaid) => {
    //     try {
    //         if (!areaid) return;
    //         const res = await axios.get("/area/getareabycity/" + areaid)
    //         console.log(res.data.data)
    //         setarea(res.data.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // /* end */

    const submithandler = async (data) => {
        setdonationFlag(true)
        data.donorId = localStorage.getItem("id")
        console.log(data)
        // const res = await axios.post("/donation/add", data)

        const formData = new FormData()
        formData.append("donorId", localStorage.getItem("id"))
        formData.append("category", data.category)
        formData.append("size", data.size)
        formData.append("quantity", data.quantity)
        formData.append("condition", data.condition)
        formData.append("description", data.description)
        formData.append("address", data.address)
        formData.append("image", data.image[0])

        const res = await axios.post("/donation/addwithfile", formData)
        setdonationFlag(false)
        console.log(res)
        res.status == 201 && toast.success('data added!', {
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
    }

    const validation = {
        image: {
            required: {
                value: true,
                message: "*"
            }
        },
        category: {
            required: {
                value: true,
                message: "*"
            }
        },
        size: {
            required: {
                value: true,
                message: "*"
            }
        },
        quantity: {
            required: {
                value: true,
                message: "*"
            }
        },
        address: {
            required: {
                value: true,
                message: "*"
            }
        },
        staus: {
            required: {
                value: true,
                message: "*"
            }
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card card-primary card-outline mb-4 w-50" style={{ 'maxWidth': '550px' }}>

                <div className="card-header" >
                    <div className="card-title" style={{ textAlign: 'center', width: '100%' }}>Post Donation</div>
                </div>
                {/*end::Header*/}
                {/*begin::Form*/}
                <form onSubmit={handleSubmit(submithandler)}>
                    {/*begin::Body*/}
                    <div className="card-body">
                        <label htmlFor="inputGroupFile02" className="form-label">
                            Post an Image
                        </label>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02" {...register('image')} />
                            <label className="input-group-text" htmlFor="inputGroupFile02">
                                Upload
                            </label>
                        </div>

                        <div>
                            <label>
                                Category : &nbsp;
                            </label>
                            <input type="radio" name="category" id="category"/>Male
                            <input type="radio" name="category" id="category" />Female
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleSize" className="form-label">
                                Size : &nbsp;
                            </label>
                            <select {...register('size', validation.size)} id='exampleSize'>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputTime" className="form-label">
                                Quantity : &nbsp;
                            </label>
                            <input
                                type='number'
                                id="exampleInputTime"
                                {...register("quantity", validation.quantity)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleCondition" className="form-label">
                                Condition : &nbsp;
                            </label>
                            <input
                                type='text'
                                className="form-control"
                                id="exampleCondition"
                                {...register("condition")}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleDescription" className="form-label">
                                Description : &nbsp;
                            </label>
                            <input
                                type='text'
                                className="form-control"
                                id="exampleDescription"
                                {...register("description")}
                            />
                        </div>

                        {/* practise of dependent cities */}

                        {/* <div className="mb-3">
                            <label htmlFor="exampleState" className="form-label">
                                State : &nbsp;
                            </label>
                            <select className="form-control" {...register("state")} onChange={(e) => {
                                getCityById(e.target.value);
                                setarea([]);
                                setcity([]),
                                setValue("state",e.target.value)
                            }
                            } id='exampleState' >
                                <option>Select State</option>
                                {
                                    state?.map((data) => {
                                        return <option value={data._id}>{data.name}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleCity" className="form-label">
                                City : &nbsp;
                            </label>
                            <select className = "form-control" id='exampleCity' {...register("city")} onChange={(e) => { getAreaByCity(e.target.value), setarea([]),setValue("city",e.target.value) }} >
                                <option>Select city</option>
                                {
                                    city?.map((data) => {
                                        return <option value={data._id}>{data.name}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleArea" className="form-label">
                                Area : &nbsp;
                            </label>
                            <select className ="form-control" id='exampleArea' {...register("area")}>
                                <option>Select Area</option>
                                {
                                    area?.map((data) => {
                                        return <option value={data._id}>{data.name}</option>
                                    })
                                }
                            </select>
                        </div>  */}

                        {/* dependent city logic ends here */}

                        <div className="mb-3">
                            <label htmlFor="exampleInputAddress" className="form-label">
                                Address : &nbsp;
                            </label>
                            <input
                                type='text'
                                className="form-control"
                                id="exampleDescription"
                                {...register("address", validation.address)}
                            />
                        </div>

                        <div className="mb-3 form-check d-flex">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                required
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
