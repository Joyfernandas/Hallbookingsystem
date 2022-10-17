import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./bill.css"
import { Link } from 'react-router-dom'

export default function Bill() {

    const [input, setInput] = useState([])
    const [total, settotal] = useState([])

    useEffect(() => {

        axios.get("api/Bill/")
            .then((res) => {
                setInput(res.data)
            })
    }, [])

    let tota = 0;



    return (
        <div>
            <div class=" py-5">
                <div class="row">
                    <h1 className='text-center'>Bill Details</h1>
                    <div class="col-lg-10 mx-auto">
                        <div class="card rounded shadow border-0">
                            <div class="card-body p-5 bg-white rounded">
                                <div class="text-right">
                                </div><br />
                                <div class="table-responsive">
                                    <table id="example" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>User Email</th>
                                                <th>Customer Name</th>
                                                <th>Amount</th>
                                                <th>Payment Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                input.map((res) => {
                                                    return (
                                                        <tr>
                                                            <td>{res.user_name}</td>
                                                            <td>{res.custmor}</td>
                                                            <td>₹ {res.hall_charge}.0</td>
                                                            <td>{res.payment_date}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-end">
                                    <Link to="/hall_crud" type="button" class="btn btn-outline-primary">&#060; Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
