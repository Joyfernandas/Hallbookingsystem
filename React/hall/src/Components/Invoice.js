import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Invoice() {
    const { id } = useParams()
    const [input, setinput] = useState([])
    console.log(input)

    useEffect(() => {
        axios.get(`/api/bill/${id}/`)
            .then((res) => {
                setinput(res.data)
            })

    }, [])

    return (
        <div>
            {
                input.map((res) => {
                    return (
                        <p>{res.user_name}</p>
                    )
                })
            }
        </div>
    )
}
