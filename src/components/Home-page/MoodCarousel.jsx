import React from "react";
import Slider from "react-slick";
import "./MoodCarousel.css";

const MoodCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
            title: "Mood & Emotional Balance",
            description:
                "Attain serenity and emotional harmony, reducing stress and anxiety.",
            image: "./image1.png",
        },
        {
            title: "Energy & Mental Clarity",
            description:
                "Boost vitality and cognitive function for a productive day.",
            image: "./image1.png",
        },
        {
            title: "Energy & Mental Clarity",
            description:
                "Boost vitality and cognitive function for a productive day.",
            image: "./image1.png",
        },
        {
            title: "Energy & Mental Clarity",
            description:
                "Boost vitality and cognitive function for a productive day.",
            image: "./image1.png",
        },
        {
            title: "Energy & Mental Clarity",
            description:
                "Boost vitality and cognitive function for a productive day.",
            image: "./image1.png",
        },
        {
            title: "Energy & Mental Clarity",
            description:
                "Boost vitality and cognitive function for a productive day.",
            image: "./image1.png",
        },
    ];

    return (
        <div className="mood-carousel mt-[0px] sm:mt-[40px] md:mt-[30px] lg:mt-[30px] xl:mt-[45px]">
            <h6>Unlock The secrets of Frequency, Energy & Vibration</h6>
            <h2 className="responsive-heading">Choose Your Mood. Energize <span>Your Body</span></h2>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <div
                            className="card-image"
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                        >
                            <div className="overlay">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MoodCarousel;