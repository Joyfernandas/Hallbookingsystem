import React, { useEffect, useState } from 'react'
import "./hall_edit.css"
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Hall_edit() {

    const navi = useNavigate()

    const { id } = useParams();
    const [edit, setedit] = useState([])
    const [type, settype] = useState([])
    const [employe, setEmploya] = useState([])

    const handleImageChange = (e) => {
        setedit({
            ...edit,
            ['image']: e.target.files[0]
        })
    };

    useEffect(() => {
        axios.get("/api/Hall_type/")
            .then((res) => {
                settype(res.data)
            })
        axios.get("/api/Employe/")
            .then((res) => {
                setEmploya(res.data)
            })
        axios.get(`/api/Halls/${id}/`)
            .then((res) => {
                setedit(res.data)
            })
    }, [])

    const handiledit = (e) => {
        setedit({ ...edit, [e.target.name]: e.target.value })
    }



    const handilsubmit = () => {
        axios.put(`/api/Halls/${edit.id}/`, edit, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        navi("/hall_crud")
    }


    return (
        <div>
            <div id='all'>
                <h6>.</h6>
                <h6>.</h6>
                <h6>.</h6>
                <div id="form" class="col-sm-8 mx-auto">
                    <div className='control-div'>
                        <label className='creat-lable'><b>Hall Name</b></label>
                        <input type="text" name="name" value={edit?.name} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Venue</b></label>
                        <input type="text" name="address" value={edit?.address} className='border border-dark input-style' required onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Hall Rent</b></label>
                        <input type="number" name="price" value={edit?.price} className='border border-dark input-style' required onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Capacity</b></label>
                        <input type="text" name="capacity" value={edit?.capacity} className='border border-dark input-style' required onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Image</b></label>
                        <input type="file" id="fileinput" name='image' className='input-style' onChange={(e) => handleImageChange(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Hall Type</b></label>
                        <select class='border border-dark input-style' name='type' value={edit?.type} onBlur={(e) => handiledit(e)} >
                            {
                                type.map((res) => {
                                    return (
                                        <option value={res.id}>{res.hall_type}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Employes</b></label>
                        <select name='employe' class='border border-dark input-style' onClick={(e) => handiledit(e)}>
                            {
                                employe.map((res) => {
                                    return (
                                        <option value={res.id}>{res.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <br />
                    <div className='control-div'>
                        <h3 class="text-left">Owner Details</h3>
                        <label className='creat-lable'><b>Name</b></label>
                        <input type="text" name='owner_name' value={edit?.owner_name} className='border border-dark input-style' required onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Email</b></label>
                        <input type="text" name='owner_email' value={edit?.owner_email} className='border border-dark input-style' required onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Phone Number</b></label>
                        <input type="text" name='owner_phone' value={edit?.owner_phone} className='border border-dark input-style' required onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <button className='btn btn-info add' onClick={handilsubmit}>Edit Details</button>
                </div>
                <h6>.</h6>
                <h6>.</h6>
                <h6>.</h6>
                <h6>.</h6>
                <h6>.</h6>
            </div>
        </div >
    )
}
