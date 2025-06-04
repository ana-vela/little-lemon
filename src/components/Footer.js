import React from 'react'
import footerImage from '../images/little-lemon-Logo.svg'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={footerImage} alt="Little Lemon footer logo" />
                </div>
            <div className="footer-sitemap">
                <h2>Doormat Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
            </div>
            <div className="footer-contact">
                <h2>Contact Info</h2>
                <p>987 Main St.</p>
                <p>Los Angeles, CA</p>
                <p>(213)456-7890</p>
                <p>hello[at]littlelemon.com</p>
            </div>
            <div className="footer-social">
                <p>Social Media Links</p>
            </div>
        </div>
        </>
    )
}