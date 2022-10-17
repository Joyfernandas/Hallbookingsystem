import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

export default function Nav() {

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                    <Link to="/" class="btn">Home</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/login" class="btn">Login</Link>
                            <Link to="/customer_setail_upload" class="btn">Register</Link>
                            <Link to="login" onClick={() => localStorage.clear()} class="btn">Logout</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
