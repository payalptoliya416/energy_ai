import React from "react";
import Slider from "react-slick";
import "./MoodCarousel.css";
const Transformations = () => {
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

    const items = [
        {
            image: "./slider2-1.png",
        },
        {
            image: "./slider2-2.png",
        },
        {
            image: "./slider2-3.png",
        },
    ];

    return (
        <section>
        <div className="transformations-carousel pt-[60px]">
            <h2 className="text-[32px] xs:text-[38px] sm:text-[50px] md:text-[65px]">Life Changing Transformations</h2>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <div
                            className="card-image-slider"
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                        >
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </section>
    );
};

export default Transformations;