import React, { useRef, useEffect, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useEffect(() => {
        const duration = isMobile ? 1 : 1.3;
        const stagger = isMobile ? 0 : 0.2;

        gsap.fromTo(
            ".counter-number",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: duration,
                ease: "power2.inOut",
                stagger: stagger,
                scrollTrigger: {
                    trigger: counterRef.current,
                    start: "top 90%",
                    onEnter: () => setStartAnimation(true),
                },
            }
        );
    }, [isMobile]);

    return (
        <div
            id="counter"
            className="padding-x-lg xl:mt-0 mt-32"
            ref={counterRef}
        >
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div
                        key={item.label}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {startAnimation && (
                                <CountUp
                                    suffix={item.suffix}
                                    end={item.value}
                                    decimals={
                                        item.label ===
                                        "CGPA in Computer Science"
                                            ? 2
                                            : 0
                                    } // Show decimals only for CGPA
                                />
                            )}
                        </div>
                        <div className="text-white-50 text-lg">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
