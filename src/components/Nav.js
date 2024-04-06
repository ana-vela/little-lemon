import React from 'react'
import siteLogo from '../images/new-Logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={siteLogo} alt="Little Lemon Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Order Online</li>
                <li>Log In</li>
            </ul>
        </nav>
    )
}