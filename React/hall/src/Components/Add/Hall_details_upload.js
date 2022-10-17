import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import "./hall_detail_upload.css"
import { useNavigate } from 'react-router-dom'
import SimpleReactValidator from "simple-react-validator"



export default function Hall_details_upload() {

    const valid = useRef(new SimpleReactValidator())
    const [, setForceUpdate] = useState()

    const [type, settype] = useState([])
    const [employe, setEmploya] = useState([])
    const [outdetail, setoutdetail] = useState([])
    const [phone, setphone] = useState()

    const dt = useNavigate();

    useEffect(() => {
        axios.get("api/Hall_type/")
            .then((res) => {
                settype(res.data)
                console.log(res.data)
            })
        axios.get("api/Employe/")
            .then((res) => {
                setEmploya(res.data)
            })
    }, [])


    const handildetail = (e) => {
        setoutdetail({ ...outdetail, [e.target.name]: e.target.value })
        console.log(outdetail)
    }

    const handilSubmit = () => {
        let formValid = valid.current.allValid();
        if (!formValid) {
            valid.current.showMessages();
            setForceUpdate(1)
        } else {
            axios.post("api/Halls/", outdetail, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            dt("/hall_crud")
        }
    }

    const handleImageChange = (e) => {
        console.log("Image")
        console.log(e)
        setoutdetail({
            ...outdetail,
            ['image']: e.target.files[0]
        })
    };

    return (
        <div>
            <div class="cd">
                <p>.</p>
                <div class="row justify-content-center ">
                    <div class="col-md-7">
                        <div class="card p-5 cl">
                            <h3 class="text-center">Hall Details Upload</h3><br />
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group ">
                                    <label>Hall Name</label>
                                    <input type="text" class="form-control" name='name' onChange={(e) => handildetail(e)} />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.name, 'required')}</p>

                                </div><br />
                            </div>
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group">
                                    <label>Venue</label>
                                    <input type="text" class="form-control" name='address' onChange={(e) => handildetail(e)} />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.address, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group">
                                    <label>Hall Rent</label>
                                    <input type="number" class="form-control" name='price' onChange={(e) => handildetail(e)} />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.price, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group">
                                    <label>Capacity</label>
                                    <input type="text" class="form-control" name='capacity' onChange={(e) => handildetail(e)} maxLength="5" />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.capacity, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group">
                                    <label>Image</label><br />
                                    <input type="file" id="fileinput" class="form col-md-9 mx-auto" name='image' onChange={(e) => handleImageChange(e)} />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.image, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group">
                                    <label calss="col-sm-3">Hall Type</label>
                                    <select class="form-control col-md-8 mx-auto" name='type' onClick={(e) => handildetail(e)}>
                                        {
                                            type.map((res) => {
                                                return (
                                                    <option value={res.id}>{res.hall_type}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.type, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-8 mx-auto">
                                <div class="form-group">
                                    <label>Employes</label><br />
                                    <select class="form-control col-md-9 mx-auto" name='employe' onChange={(e) => handildetail(e)}>
                                        {
                                            employe.map((res) => {
                                                return (
                                                    <option value={res.id}>{res.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.employe, 'required')}</p>
                                </div>
                            </div><br />
                            <hr />
                            <h4 class="text-center">Owner Details</h4>
                            <div class="form col-md-6 mx-auto">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name='owner_name' onChange={(e) => handildetail(e)} />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.owner_name, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-6 mx-auto">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" name='owner_email' onChange={(e) => handildetail(e)} />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.owner_email, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-6 mx-auto">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" name='owner_phone' onBlur={(e) => handildetail(e)} class="form-control" placeholder='' maxLength={10}
                                        pattern="[0-9]*" value={phone}
                                        onChange={(event) =>
                                            setphone(() => (event.target.validity.valid ? event.target.value : ''))
                                        }
                                        required /><br />
                                    <p className='text-danger col-sm-6'>{valid.current.message('', outdetail?.owner_phone, 'required')}</p>
                                </div>
                            </div><br />
                            <div class="form col-md-3 mx-auto">
                                <button class="btn btn-primary col-md-10 mx-auto" onClick={handilSubmit}><span>Add Details</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <p>.</p>
            </div>
        </div>
    )
}
