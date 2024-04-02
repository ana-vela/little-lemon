import React from 'react'
import heroImage from '../images/restaurantfood.jpg'
import greekSalad from '../images/greek-salad.jpg'
import lemonDessert from '../images/lemon-dessert.jpg'

import bruschetta from '../images/bruchetta.svg'



export default function Main() {
    return (
        <>
        <div className="hero">
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="hero-image">
        <img src={heroImage} alt="platter of food" />

        </div>
        </div>

< div className="menu">
    <div className="menu-item">
    <img src={greekSalad} alt="greek salad" width="200px" />
    <div className="name-price">
    <div className="item-name">Greek Salad</div>
    <div className="item-price">$12.99</div>
    </div>
    <div className="item-image"></div>
    <div className="item-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </div>
    </div>



    <div className="menu-item">
    <img src={bruschetta} alt="bruschetta" width="200px" />
    <div className="name-price">
    <div className="item-name">Bruschetta</div>
    <div className="item-price">$5.99</div>
    </div>
    <div className="item-image"></div>
    <div className="item-description">Our Bruschetta is made from grilled bread 
    that has been smeared with garlic and seasoned with salt and olive oil.</div>
    </div>

    <div className="menu-item">
    <img src={lemonDessert} alt="lemon dessert" width="200px" />
    <div className="name-price">
    <div className="item-name">Lemon Dessert</div>
    <div className="item-price">$5.00</div>
    </div>
    <div className="item-image"></div>
    <div className="item-description">This comes straight from grandma’s recipe book, 
    every last ingredient has been sourced and is as authentic as can be imagined.</div>
    </div>
</div>
        </>
    )
}