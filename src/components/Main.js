import React from 'react'
import heroImage from '../images/restaurantfood.jpg'

export default function Main() {
    return (
        <>
        <div className="hero" >
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="hero-image">
        <img src={heroImage} alt="platter of food" />
        </div>
        </div>
        </>
    )
}