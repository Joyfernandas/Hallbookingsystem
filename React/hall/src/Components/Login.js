import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../CSS/login.css"
import axios from 'axios';
import { useState } from 'react';

export default function Login({ test }) {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    console.log(Email)
    const [Password, setPassword] = useState('');
    console.log(Password)


    function onhandleevent(event) {
        axios.post('api/token/', { "email": Email, "password": Password })
            .then(response => {
                console.log(response)
                if (response?.status === 200) {
                    axios.defaults.headers['Authorization'] = `JWT ${response?.data?.access}`
                    localStorage.setItem('access', response?.data?.access)
                    localStorage.setItem('role', response?.data?.role);
                    test(true);
                    if (response?.data?.role === "Admin")
                        navigate('/hall_crud')
                    else {
                        navigate('/hall_details_view')

                    }
                }
            })
            .catch(error => {
                alert(error?.response.data.detail)
            })
    }
    return (
        <div>
            <div>
                <div class="wrapper">
                    <div class="text-center mt-3 name">
                        Login Here
                    </div>
                    <div class="p-3 mt-3">
                        <div class="form-field d-flex align-items-center">
                            <span class="far fa-user"></span>
                            <input class="input" onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email" id="username" />
                        </div>
                        <div class="form-field d-flex align-items-center">
                            <span class="fas fa-key"></span>
                            <input class="input" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" id="password" />
                        </div>
                        <button class='btn mt-3' onClick={onhandleevent}>Log In</button>
                    </div>

                </div>
            </div>


        </div>
    )
}
