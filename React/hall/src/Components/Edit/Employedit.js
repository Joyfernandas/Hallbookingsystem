import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { withSwalInstance } from 'sweetalert2-react';
import "./empl.css"


export default function Employeedit() {

    const { id } = useParams()
    const SweetAlert = withSwalInstance(Swal)
    const nave = useNavigate();
    const open = useRef();

    const [rolee, setRole] = useState([])
    const [input, setinput] = useState([]);
    console.log(input)


    useEffect(() => {
        axios.get(`/api/Employe/${id}/`)
            .then((res) => {
                setinput(res.data)
            })

        axios.get("/api/Employe_role/")
            .then((res) => {
                setRole(res.data)
            })
        open.current.focus();
    }, [])

    const handilChange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }

    const handilSubmit = () => {
        axios.put(`/api/Employe/${input.id}/`, input)
        nave("/employe_crud")
        Swal.fire(
            'Good Job!',
            'Edited Successfully',
            'Success')
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
                        <h2 class="text-center">Employe Details Edit</h2>
                        <div class="col-md-6">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" ref={open} value={input?.name} onChange={(e) => handilChange(e)} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" name="dob" onChange={(e) => handilChange(e)} value={input?.dob} onBlur={visu} class="form-control input" placeholder='' />
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Age</label>
                            <input type="text" name="age" onChange={(e) => handilChange(e)} value={input?.age} class="form-control input" placeholder='' />
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
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control input" value={input?.email} placeholder='' onChange={(e) => handilChange(e)} />
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
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Address</label>
                            <input type="text" name="address" class="form-control input" value={input?.address} placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">City</label>
                            <input type="text" name="city" class="form-control input" value={input?.city} placeholder='' onChange={(e) => handilChange(e)} />
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Pin Code</label>
                            <input type="text" name='pincode' class="form-control input" value={input?.pincode} placeholder="   6.. ..." onChange={(e) => handilChange(e)} maxLength={6}
                                pattern="[0-9]*"
                                required /><br />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number</label>
                            <input type="text" name='phone_number' onChange={(e) => handilChange(e)} value={input?.phone_number} class="form-control input" placeholder='' maxLength={10}
                                pattern="[0-9]*"

                                required /><br />
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-3 mx-auto">
                            <button class="btn btn-primary" onClick={handilSubmit}>Edit Details</button>
                        </div>
                    </form>
                </div>
            </div >
            <p>.</p>
        </div>
    )
}
