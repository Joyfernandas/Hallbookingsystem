import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./hall.css"

export default function Hall_crud() {

    const [halldetailinput, setHalldetailinput] = useState([]);

    useEffect(() => {
        axios.get("api/Halls/")
            .then((res) => {
                setHalldetailinput(res.data)
            })
    }, [])

    const dell = () => {
        axios.get("api/Halls/")
            .then((res) => {
                setHalldetailinput(res.data)
            })
    }

    const handilDelete = (id) => {
        axios.delete(`api/Halls/${id}/`)
            .then(() => {
                dell()
            })
    }

    return (
        <>
            <div>
                <br />
                <div class="container">
                    <div class="text-end">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="/customer_crud" class="dropdown-item">Customers</Link></li>
                            <li><Link to="/employe_crud" class="dropdown-item">Employes</Link></li>
                            <li><Link to="/hall_crud" class="dropdown-item">Halls</Link></li>
                            <li><Link to="/bill" class="dropdown-item">Bills</Link></li>
                            <div class="dropdown">
                            </div>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-md-offset-1 col-md-11 mx-auto">
                            <div class="panel">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <h4 class="title">Halls List</h4>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="text-center"><Link to="/hall_details_upload" className="btn btn-light">Add Halls</Link></h6>
                                <div class="panel-body table-responsive">
                                    <br />
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Hall Name</th>
                                                <th>Venue</th>
                                                <th>Hall Rent</th>
                                                <th>Capacity</th>
                                                <th>Owner Name</th>
                                                <th>Owner Phone Number</th>
                                                <th colSpan={2}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                halldetailinput.map((res) => {
                                                    return (
                                                        <tr>
                                                            <td class="td">{res.name}</td>
                                                            <td class="td">{res.address}</td>
                                                            <td class="td">Rs. {res.price}.0 </td>
                                                            <td class="td">{res.capacity} Seats</td>
                                                            <td class="td">{res.owner_name}</td>
                                                            <td class="td">{res.owner_phone}</td>
                                                            <td class="td">
                                                                <Link to={`/hall_edit/${res.id}/`}><button class="btn btn-light">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                                    </svg>
                                                                </button>
                                                                </Link>
                                                            </td>
                                                            <td class="td"><button class="btn btn-light" onClick={() => handilDelete(res.id)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                                </svg>
                                                            </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
