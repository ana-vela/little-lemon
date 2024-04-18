import React from 'react'
import heroImage from '../images/restaurantfood.jpg'
import greekSalad from '../images/greek-salad.jpg'
import lemonDessert from '../images/lemon-dessert.jpg'
import bruschetta from '../images/bruchetta.svg'
import testimonialPhoto from '../images/testimonial-photo.jpg'
import aboutImage from '../images/Mario-and-Adrian.jpg'


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

        <div className="menu-row-title">
        <h2>Menu</h2>
        </div>
        <div className="menu">
            <div className="menu-item">
                <img className="item-image" src={greekSalad} alt="greek salad"  />
            <div className="name-price">
                <div className="item-name">Greek Salad</div>
                <div className="item-price">$12.99</div>
            </div>
            <div className="item-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </div>
            </div>

            <div className="menu-item">
                <img className="item-image" src={bruschetta} alt="bruschetta"/>
            <div className="name-price">
                <div className="item-name">Bruschetta</div>
                <div className="item-price">$5.99</div>
            </div>
            <div className="item-description">Our Bruschetta is made from grilled bread 
    that has been smeared with garlic and seasoned with salt and olive oil.</div>
            </div>

            <div className="menu-item">
                <img className="item-image" src={lemonDessert} alt="lemon dessert"  />
            <div className="name-price">
                <div className="item-name">Lemon Dessert</div>
                <div className="item-price">$5.00</div>
            </div>
            <div className="item-description">This comes straight from grandma’s recipe book, 
    every last ingredient has been sourced and is as authentic as can be imagined.</div>
            </div>
        </div>

        <div className="testimonials-row-title">
            <h2>Testimonials</h2>
        </div>
        <div className="testimonials-row">

            <div className="testimonial">
            <img className="testimonial-image" src={testimonialPhoto} alt="testimonial"  />
            <div className="testimonial-name">Gina</div>
            <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="testimonial">
            <img className="testimonial-image" src={testimonialPhoto} alt="testimonial"  />
            <div className="testimonial-name">Jane</div>
            <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="testimonial">
       
            <img className="testimonial-image" src={testimonialPhoto} alt="testimonial"  />
            <div className="testimonial-name">Laura</div>
            <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="testimonial">
            <img className="testimonial-image" src={testimonialPhoto} alt="testimonial"  />
            <div className="testimonial-name">Julia</div>
            <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
    </div>

    <div className="about">
        <div className="about-text">
            <h2 className="about-title">Little Lemon</h2>
            <p className="about-location">Chicago</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div>
            <img className="about-image" src={aboutImage} alt="chefs in action"/>
        </div>
    </div>

        </>
    )
}