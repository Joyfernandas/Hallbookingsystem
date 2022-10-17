import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import "../CSS/booking.css"
import Swal from 'sweetalert2';
import { withSwalInstance } from 'sweetalert2-react';
import SimpleReactValidator from "simple-react-validator"



export default function Booking() {
    const navi = useNavigate();
    const SweetAlert = withSwalInstance(Swal)
    const valid = useRef(new SimpleReactValidator())

    const [, setForceUpdate] = useState()

    const { id } = useParams();

    const [halldetail, sethalldetail] = useState([])
    const [bookout, setbookout] = useState([]);
    console.log(bookout)
    const handiledit = (e) => {
        setbookout({ ...bookout, [e.target.name]: e.target.value })
    }

    const handilSubmit = () => {
        let formValid = valid.current.allValid();
        if (!formValid) {
            valid.current.showMessages();
            setForceUpdate(1)
        } else {
            axios.post("/api/Booking/", bookout)
                .then((res) => {
                    navi(`/billing/${res?.data.id}/`)
                })
        }
    }

    useEffect(() => {
        axios.get(`/api/Halls/${id}/`)
            .then((res) => {
                sethalldetail(res.data)
            })

        var current = new Date()
        setbookout({
            ...bookout,
            ['booked_on']: (`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`)
        })
    }, [])

    function booking(event) {
        var booked_on = new Date(bookout.booked_on)
        var booking = new Date(event.target.value);
        if (booked_on > booking) {
            Swal.fire(
                'Bad!',
                'You have choosing future date',
                'error')
        }
    }

    const [totalmount, settotalmount] = useState([])


    function leaving(event) {
        var booking = new Date(bookout.booking_date)
        var leaving = new Date(event.target.value)
        if (booking > leaving) {
            Swal.fire(
                'Bad!',
                'Invalid Date',
                'error')
        }
    }

    function amount() {
        var startdate = new Date(bookout.booking_date).getDate()
        var enddate = new Date(bookout.leaving_date).getDate()
        var answer = enddate - startdate + 1
        var amount = halldetail.price
        var output = (answer * amount)
        settotalmount({ ...totalmount, ["price"]: output })
    }

    return (
        <div class="imgg">
            <p>.</p>
            <div class=" col-sm-6 mx-auto">
                <div class="containerrrr card px-1 py-3">
                    <div class=" card-body">
                        <h4 class="text-center">Booking</h4>
                        <div class="row">
                            <div class="form__div">
                                <label>User Email</label>
                                <input type="text" class="form-control" name="name" onChange={(e) => handiledit(e)} />
                                <p className='text-danger col-sm-6'>{valid.current.message('', bookout?.name, 'required')}</p>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Name</label>
                                <input type="text" class="form-control" name="custmor" placeholder=" " onChange={(e) => handiledit(e)} />
                                <p className='text-danger col-sm-6'>{valid.current.message('', bookout?.custmor, 'required')}</p>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Hall Name</label>
                                <select class="form-control" name="hall_name" onClick={(e) => handiledit(e)}>
                                    <option>{halldetail.name}</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Booking On</label>
                                <input type="text" class="form-control" name="booked_on" value={bookout?.booked_on} onChange={(e) => handiledit(e)} readOnly />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Booking Date</label>
                                <input type="date" class="form-control" name="booking_date" onBlur={(e) => handiledit(e)} onChange={booking} />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Arrival Date</label>
                                <input type="date" class="form-control" name="arrival_date" value={bookout?.booking_date} placeholder="name" onBlur={(e) => handiledit(e)} />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Leaving date</label>
                                <input type="date" class="form-control" name="leaving_date" onBlur={(e) => handiledit(e)} onChange={leaving} />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Hall Rent</label>
                                <select class="form-control" name="price" onBlur={(e) => handiledit(e)} onClick={amount}>
                                    <option>{totalmount?.price}</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="form__div">
                                <label>Booking Purpose</label>
                                <select class="form-control" name="booking_parpus" onClick={(e) => handiledit(e)}>
                                    <option>Marriage</option>
                                    <option>Metting</option>
                                    <option>Reception</option>
                                    <option>Birth Day</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="text-center">
                            <button class="btn btn-primary btn-block" onClick={handilSubmit}>Conform</button>
                        </div>
                    </div>
                </div>
            </div>
            <p>.</p>
        </div >
    )
}
