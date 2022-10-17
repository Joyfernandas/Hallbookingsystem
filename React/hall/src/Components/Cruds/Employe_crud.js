import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./empcrd.css"

export default function Employe_crud() {

    const [edata, setEdata] = useState([]);


    useEffect(() => {
        console.log('axios : ', axios.defaults)
        axios.get("api/Employe")
            .then((res) => {
                setEdata(res.data)
            })

    }, [])


    const dell = () => {
        axios.get("api/Employe")
            .then((res) => {
                setEdata(res.data)
            })
    }

    const handledelet = (id) => {
        axios.delete(`api/Employe/${id}/`)
            .then(() => {
                dell()
            })
    }

    return (
        <div class="bag">
            <div class=" py-5">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <div class="card rounded shadow border-0">
                            <div class="card-body p-5 bg-white rounded">
                                <h1 className='text-center'>Employe Details</h1>
                                <div class="text-right">
                                    <Link to="/employe_detail_upload" class="btn btn-info col-sm-1">Add</Link>
                                </div><br />
                                <div class="table-responsive">
                                    <table id="example" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Date of Birth</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>Role</th>
                                                <th>Address</th>
                                                <th>Phone Number</th>
                                                <th colSpan={2}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                edata.map((res) => {
                                                    return (
                                                        <tr>
                                                            <td>{res.name}</td>
                                                            <td>{res.dob}</td>
                                                            <td>{res.age}</td>
                                                            <td>{res.gender}</td>
                                                            <td>{res.role}</td>
                                                            <td>{res.address}</td>
                                                            <td>{res.phone_number}</td>
                                                            <td>
                                                                <Link class="btn btn-dark" to={`/employeedit/${res.id}/`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                    </svg>
                                                                </Link></td>
                                                            <td><button class="btn btn-dark" onClick={() => handledelet(res.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                            </svg></button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div class="text-end">
                                        <Link to="/hall_crud" type="button" class="btn btn-outline-primary">&#060; Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
