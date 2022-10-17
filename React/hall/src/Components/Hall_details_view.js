import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/hall_details_view.css'


export default function Hall_details_view() {

    const [detail, setDetails] = useState([]);

    useEffect(() => {
        axios.get("api/Halls/")
            .then((res) => {
                setDetails(res.data)
            })
    }, [])


    return (
        <>
            <div>
                {
                    detail.map((res) => {
                        return (
                            <div class="container ">
                                <div class="col-md-8 mx-auto">
                                    <div class="card">
                                        <img src={res.image} class="img-thumbnail" />
                                        <div class="card-body">
                                            <h3 class="card-title">{res.name}</h3>
                                            <h4 class="card-title">{res.type}</h4>
                                            <p class="card-text">₹{res.price}.0 per day</p>
                                            <p class="card-text">{res.capacity} Capacity</p>
                                            <p class="card-text">{res.address}</p>
                                            <div class="text-center">
                                                <Link to={`/booking/${res.id}/`}><button class="btn btn-primary text-right">Book Now</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
