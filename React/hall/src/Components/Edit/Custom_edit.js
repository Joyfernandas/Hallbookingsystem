import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./custom_edit.css"
import { useParams, useNavigate } from 'react-router-dom';

export default function Custom_edit() {

    const { id } = useParams();
    const navi = useNavigate()

    const [edit, setEdit] = useState([]);

    useEffect(() => {
        axios.get(`/api/Customer/${id}/`)
            .then((res) => {
                setEdit(res.data)
            });

    }, []);

    const handiledit = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    };

    const handilSubmit = () => {
        axios.put(`/api/Customer/${edit.id}/`, edit)
        navi("/customer_crud")
    };


    return (
        <div>
            <div id='al'>
                <h6>.</h6>
                <h6>.</h6>
                <h6>.</h6>
                <div id="for" class="col-sm-7 mx-auto">
                    <div className='control-div'>
                        <label className='creat-lable'><b>First Name</b></label>
                        <input type="text" name="first_name" value={edit?.first_name} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Last Name</b></label>
                        <input type="text" name="last_name" value={edit?.last_name} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Date of Birth</b></label>
                        <input type="date" name="dob" value={edit?.dob} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Age</b></label>
                        <input type="number" name="age" value={edit?.age} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Gendre</b></label>
                        <select name='gender' value={edit?.gender} className='border border-dark input-style' onClick={(e) => handiledit(e)}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Email</b></label>
                        <input type="email" name='email' value={edit?.email} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                        <br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Address 1</b></label>
                        <input type="text" name='address1' value={edit?.address1} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Address 2</b></label>
                        <input type="text" name='address2' value={edit?.address2} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>City</b></label>
                        <input type="text" name='city' value={edit?.city} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Pincode</b></label>
                        <input type="text" name='pincode' value={edit?.pincode} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Phone Number</b></label>
                        <input type="text" name='contect' value={edit?.contect} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <div className='control-div'>
                        <label className='creat-lable'><b>Adhar Number</b></label>
                        <input type="text" name='adhar' value={edit?.adhar} className='border border-dark input-style' onChange={(e) => handiledit(e)} /><br />
                    </div>
                    <button className='btn btn-primary ad' onClick={handilSubmit}>Edit Details</button>
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
