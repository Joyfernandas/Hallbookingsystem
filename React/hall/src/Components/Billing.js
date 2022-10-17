import React, { useEffect, useState } from 'react'
import "../CSS/billing.css"
import { useParams, useNavigate } from 'react-router-dom'
import { withSwalInstance } from 'sweetalert2-react';
import SimpleReactValidator from "simple-react-validator"
import Swal from 'sweetalert2';

import axios from 'axios'

export default function Billing() {

    const SweetAlert = withSwalInstance(Swal)
    const navi = useNavigate()

    const { id } = useParams()
    const [input, setinput] = useState([])

    const [output, setoutpu] = useState([])
    console.log(output)

    useEffect(() => {
        axios.get(`/api/Booking/${id}/`)
            .then((res) => {
                setinput(res.data)
            })
    }, [])


    const handiledit = (e) => {
        setoutpu({
            ...output, [e.target.name]: e.target.value
        })
    }

    const handilSubmit = () => {
        axios.post("/api/Bill/", output)
        navi("/")

        Swal.fire(
            'Success!',
            'Payment Successful...',
            'success')
    }

    return (
        <div class="imgo">
            <p>.</p>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="card p-3">
                            <div class="img-box">
                                <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                            </div>
                            <div class="number">
                                <label class="fw-bold" for="">**** **** **** 1060</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <small><span class="fw-bold">Expiry date:</span><span>10/25</span></small>
                                <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="card p-3">
                            <div class="img-box">
                                <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                    alt="" />
                            </div>
                            <div class="number">
                                <label class="fw-bold">**** **** **** 4020</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <small><span class="fw-bold">Expiry date:</span><span>20/35</span></small>
                                <small><span class="fw-bold">Name:</span><span>Raja</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="card p-3">
                            <div class="img-box">
                                <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                                />
                            </div>
                            <div class="number">
                                <label class="fw-bold">**** **** **** 9020</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <small><span class="fw-bold">Expiry date:</span><span>15/30</span></small>
                                <small><span class="fw-bold">Name:</span><span>Doss</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 mt-4 mx-auto">
                        <div class="card p-3">
                            <p class="mb-0 fw-bold h4 text-center">Payment</p>
                        </div>
                    </div>
                    <div class="col-10 mx-auto">
                        <div class="card p-3">
                            <div class="card-body border p-0">
                                <div class="collapse show p-3 pt-0" id="collapseExample">
                                    <div class="row">
                                        <div class="col-lg-7 mx-auto">
                                            <div action="" class="form">
                                                <div class="row">
                                                    <br />
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" value={input?.name} name="user_name" onBlur={(e) => handiledit(e)} readOnly />
                                                            <label for="" class="form__label">User Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" value={input?.custmor} name="custmor" onBlur={(e) => handiledit(e)} readOnly />
                                                            <label for="" class="form__label">Customer Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" value={input?.price} name="hall_charge" onBlur={(e) => handiledit(e)} readOnly />
                                                            <label for="" class="form__label">Hall Charge</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form__div">
                                                            <input type="date" class="form-control" value={input?.booked_on} name="payment_date" onBlur={(e) => handiledit(e)} readOnly />
                                                            <label for="" class="form__label">Payment Date</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" value={input?.name} name="booking_id" onBlur={(e) => handiledit(e)} readOnly />
                                                            <label for="" class="form__label">Booking Id</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <select class="form-control" name="payment_mode" onClick={(e) => handiledit(e)}>
                                                                <option>Debit card</option>
                                                                <option>Credit card</option>
                                                            </select>
                                                            <label for="" class="form__label">Paymend Mode</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" maxLength="16" />
                                                            <label for="" class="form__label">Card Number</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" placeholder=" " maxLength="5" />
                                                            <label class="form__label">MM / yy</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form__div">
                                                            <input type="password" class="form-control" placeholder=" " maxLength="3" />
                                                            <label class="form__label">cvv code</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="btn btn-primary w-100" onClick={handilSubmit}>Sumbit</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>.</p>
        </div>
    )
}
