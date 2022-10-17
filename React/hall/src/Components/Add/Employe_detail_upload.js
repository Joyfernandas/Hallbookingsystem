import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { withSwalInstance } from 'sweetalert2-react';
import SimpleReactValidator from "simple-react-validator"


export default function Employe_detail_upload() {

    const SweetAlert = withSwalInstance(Swal)
    const valid = useRef(new SimpleReactValidator())
    const [, setForceUpdate] = useState()

    const nave = useNavigate();
    const open = useRef();
    const [detailout, setDetailout] = useState([]);
    const [rolee, setRolee] = useState([]);
    const [phone, setphone] = useState()
    const [pin, setpin] = useState()
    console.log(detailout)

    useEffect(() => {
        axios.get("api/Employe_role/")
            .then((res) => {
                setRolee(res.data)
            })
        open.current.focus();
    }, [])

    const handilChange = (e) => {
        setDetailout({ ...detailout, [e.target.name]: e.target.value })
        console.log(detailout)
    }

    const handilSubmit = () => {
        let formValid = valid.current.allValid();
        if (!formValid) {
            valid.current.showMessages();
            setForceUpdate(1)
        } else {
            axios.post("api/Employe/", detailout)
            nave("/employe_crud")
            Swal.fire(
                'Good Job!',
                'Added Successfully',
                'error')
        }
    }

    function visu(event) {
        var today = new Date();
        var dob = new Date(event.target.value);
        if (dob > today) {
            Swal.fire(
                'Bad Request!',
                'YOU HAVE CHOSING FUTURE DATE',
                'error')
        }
    }

    return (
        <div>
            <p>.</p>
            <div class="containerrr mx-auto">

                <div class="second col-sm-11 mx-auto">
                    <form class="row g-3">
                        <h2 class="text-center">Employe Details Upload</h2>
                        <div class="col-md-6">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" ref={open} onChange={(e) => handilChange(e)} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" name="dob" onBlur={(e) => handilChange(e)} onChange={visu} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.Name, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.dob, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Age</label>
                            <input type="text" name="age" onChange={(e) => handilChange(e)} class="form-control input" placeholder='' />
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
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.age, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.gender, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control input" placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Role</label>
                            <select name="role" onClick={(e) => handilChange(e)} class="form-control input">
                                {
                                    rolee.map((res) => {
                                        return (
                                            <option value={res.id}>{res.role_title}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.email, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.role, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Address</label>
                            <input type="text" name="address" class="form-control input" placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">City</label>
                            <input type="text" name="city" class="form-control input" placeholder='' onBlur={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.address, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.city, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Pin Code</label>
                            <input type="text" name='pincode' class="form-control input" placeholder="   6.. ..." onBlur={(e) => handilChange(e)} maxLength={6}
                                pattern="[0-9]*" value={pin}
                                onChange={(event) =>
                                    setpin(() => (event.target.validity.valid ? event.target.value : ''))
                                }
                                required /><br />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number</label>
                            <input type="text" name='phone_number' onBlur={(e) => handilChange(e)} class="form-control input" placeholder='' maxLength={10}
                                pattern="[0-9]*" value={phone}
                                onChange={(event) =>
                                    setphone(() => (event.target.validity.valid ? event.target.value : ''))
                                }
                                required /><br />
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.pincode, 'required')}</p>
                        </div>
                        <div class="col-md-6">
                            <p className='text-danger col-sm-6'>{valid.current.message('', detailout?.phone_number, 'required')}</p>
                        </div>
                        <div class="col-md-2 mx-auto">
                            <button class="btn btn-primary" onClick={handilSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div >
            <p>.</p>
        </div>
    )
}
