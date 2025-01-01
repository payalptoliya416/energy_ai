import React from "react";
import Slider from "react-slick";
import "./Review.css";

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const reviews = [
        {
            name: "Kevin Creegan",
            review:
                "I thought Frequencies Using The Coils Was Fantastic But This Takes It To Another Level. I Found The Effects Almost Immediately For More Physical Considerations. I Am Also Excited To Try The Quantum Abundance.",
            stars: 5,
            image: "./kevin-creegan.png",
        },
        {
            name: "Andrea Chee",
            review:
                "The Quantum Dream Is Truly God-Send. I Was Able To Fall Asleep Faster And Deeper. We Just Had A Baby And He Was Waking Up Every 3 Hours. It's Been Over A Week Now And He Only Wakes Up 1-2 Times A Night.",
            stars: 5,
            image: "./andrea-chee.png",
        },
        {
            name: "Casey Willis",
            review:
                "This Is Incredibly Powerful! I Spent With These Programs Twice For 2-3 Hours And It Gave A Big Surge Of Program. I Felt It In My Body. This Feeling Of A Surge Of Program Was So Strong That I Had To Urgently Do A Strength Workout!",
            stars: 5,
            image: "./casey-willis.png",
        },
    ];

    return (
        <div className="review-carousel">
            <Slider {...settings}>
                {reviews.map((item, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-stars">
                            {"⭐".repeat(item.stars)}
                        </div>
                        <p className="review-text">{item.review}</p>
                        <div className="review-author">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="review-image"
                            />
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Review;