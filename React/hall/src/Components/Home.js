import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../CSS/home.css'

export default function Home() {

    const [input, setInput] = useState([])


    useEffect(() => {
        axios.get("api/Halls")
            .then((res) => {
                // console.log(res.data)
                setInput(res.data)
            })
    }, [])

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />

            <link rel="stylesheet" href="https://cdn1.venuebookingz.com/assets/css-common/consolidated-css-min-01.css" />
            <link rel="stylesheet"
                href="https://cdn1.venuebookingz.com/assets/plugins/sky-forms-pro/skyforms/css/sky-forms-min.css" />
            <link rel="styleshe4et" href="https://cdn1.venuebookingz.com/assets/css/pages/page_pricing-min.css" />
            <h2 class="text-center">Hall Booking</h2>
            <div className='img'>
                <img class="img-thumbnail" src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </div>
            <p>.</p>
            <h1 class="text-center">Available Halls</h1>
            {
                input.map((res) => {
                    return (
                        <>
                            <div class="col-md-4 col-sm-8">
                                <div className="row margin-bottom-40">
                                    <div className="thumbnails thumbnail-style thumbnail-kenburn">
                                        <div className="thumbnail-img">
                                            <div className="overflow-hidden">
                                                <img className="img-responsive lazy"
                                                    src={res.image} />
                                            </div>
                                            <Link to="/login" className="btn-more hover-effect">
                                                View Details +
                                            </Link>
                                        </div>
                                        <div className="caption">
                                            <h3>
                                                {res.name}</h3>
                                            <p>{res.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div >
    )
}
