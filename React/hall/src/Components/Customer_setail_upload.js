import React, { useEffect, useState, useRef } from 'react'
import "../CSS/customer_detail.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { withSwalInstance } from 'sweetalert2-react';
import SimpleReactValidator from "simple-react-validator"

export default function Customer_setail_upload() {




    const SweetAlert = withSwalInstance(Swal)
    const valid = useRef(new SimpleReactValidator())

    const [, setForceUpdate] = useState()


    const navi = useNavigate()
    const [pho, setpho] = useState()
    const [adhar, setadhar] = useState()
    const [pin, setpin] = useState()
    const [age, setage] = useState()
    const [custemout, setCustemout] = useState([])

    function visu(event) {
        var today = new Date();
        var dob = new Date(event.target.value);
        if (dob > today) {
            Swal.fire(
                'Bad!',
                'You have choosing future date',
                'error')
        }
    }

    const handilChange = (e) => {
        setCustemout({ ...custemout, [e.target.name]: e.target.value })
        console.log(custemout)
    }

    const handilSubmit = () => {
        let formValid = valid.current.allValid();
        if (!formValid) {
            valid.current.showMessages();
            setForceUpdate(1)
        } else {
            axios.post("api/Customer/", custemout)
            navi("/login")
            Swal.fire(
                'Good job!',
                'Added Successfully',
                'success'
            )
        }
    }


    return (
        <div class="alll">
            <p>.</p>
            <div class="containerrr mx-auto">
                <div class="second col-sm-11 mx-auto">
                    <form class="row g-3">
                        <h2 class="text-center">Register Now</h2>
                        <div class="col-md-6">
                            <label class="form-label">First Name</label>
                            <input type="text" name="first_name" onChange={(e) => handilChange(e)} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Last Name</label>
                            <input type="text" name="last_name" onChange={(e) => handilChange(e)} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.first_name, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.last_name, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" name="dob" onChange={(e) => handilChange(e)} onBlur={visu} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Age</label>
                            <input type="text" name='age' onBlur={(e) => handilChange(e)} class="form-control input" placeholder='Enter your age' maxLength={2}
                                pattern="[0-9]*" value={age}
                                onChange={(event) =>
                                    setage(() => (event.target.validity.valid ? event.target.value : ''))
                                }
                                required /><br />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.dob, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.age, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Gender</label>
                            <select name="gender" onClick={(e) => handilChange(e)} class="form-control input">
                                <option disabled value>Select Your Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control input" placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.gender, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.email, 'required')}</p>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Address 1</label>
                            <input type="text" name="address1" class="form-control input" placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Address 2</label>
                            <input type="text" name="address2" class="form-control input" placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.address1, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.address1, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">City</label>
                            <input type="text" name="city" class="form-control input" placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Pincode</label>
                            <input type="text" name='pincode' onBlur={(e) => handilChange(e)} class="form-control input" placeholder='6.. ...' maxLength={6}
                                pattern="[0-9]*" value={pin}
                                onChange={(event) =>
                                    setpin(() => (event.target.validity.valid ? event.target.value : ''))
                                }
                                required /><br />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.city, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', custemout?.pincode, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number</label>
                            <input type="text" name='contect' onBlur={(e) => handilChange(e)} class="form-control input" placeholder='Enter your Mobile Number..' maxLength={10}
                                pattern="[0-9]*" value={pho}
                                onChange={(event) =>
                                    setpho(() => (event.target.validity.valid ? event.target.value : ''))
                                }
                                required /><br />
                            {/* <input type="text" name="contect" class="form-control input" placeholder='' /> */}
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Adhar Number</label>
                            <input type="text" name='adhar' onBlur={(e) => handilChange(e)} class="form-control input" placeholder='Enter your Adhar Number..' maxLength={12}
                                pattern="[0-9]*" value={adhar}
                                onChange={(event) =>
                                    setadhar(() => (event.target.validity.valid ? event.target.value : ''))
                                }
                                required /><br />
                        </div>
                        <div class="col-md-6">
                            <p>Your User Email is {custemout.email}</p>
                        </div>
                        <div class="col-md-6">
                            <p>Your Passwors is<br /> {custemout.first_name}{custemout.last_name}</p>
                        </div>
                        <div class="col-md-2 mx-auto">
                            <button class="btn btn-primary" onClick={handilSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div >
            <p>.</p>
        </div >
    )
}
