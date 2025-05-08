import React, { Suspense } from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useMediaQuery } from "react-responsive";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        // Reduce animations on mobile
        const yOffset = isMobile ? 25 : 50;
        const duration = isMobile ? 0.7 : 1;

        gsap.fromTo(
            ".hero-text h1",
            {
                y: yOffset,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: duration,
                stagger: isMobile ? 0.2 : 0.3,
                ease: "power2.out", // Changed from inOut to out for better performance
            }
        );
    }, [isMobile]);

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div
                className={`hero-layout ${
                    isMobile ? "mobile-hero-layout" : ""
                }`}
            >
                {/* Left: Hero content goes here */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 "
                                                />

                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I'm Amr a developer based in Malaysia with a passion
                        for programming
                    </p>
                    <Button
                        className="md:w-80 md:h-16 w-60 h-12 mt-5"
                        id="button"
                        text="See my Work"
                    />
                </header>

                {/* Right: Hero 3D MODEL or static image */}
                <figure>
                    <div className="hero-3d-layout mt-5">
                            <HeroExperience />
                    </div>
                </figure>
            </div>

            {/* Render AnimatedCounter with reduced animations on mobile */}
            <AnimatedCounter isMobile={isMobile} />
        </section>
    );
};

export default Hero;
