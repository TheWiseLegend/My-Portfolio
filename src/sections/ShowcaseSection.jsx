/* eslint-disable no-unused-vars */
import { use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
        ];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: { trigger: card, start: "top bottom-=100" },
                }
            );
        });
    });

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT SIDE*/}

                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img
                                src="/images/myProject1Final.png"
                                alt="fieldmate"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div className="text-content">
                            <h2>FieldMate - Futsal Field Booking App</h2>
                            <p className="text-white-50 md:text-xl">
                            A mobile app built with React Native and Expo that streamlines futsal field booking, team discovery (LFG system), and real-time scheduling. Deployed with AWS and powered by a PostgreSQL backend.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img
                                    src="/images/myProject2.png"
                                    alt="E-commerce website"
                                />
                            </div>
                            <h2>Kraftsy - Artisan E-Commerce Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img
                                    src="/images/myProject3.png"
                                    alt="Ecoomerce website"
                                />
                            </div>
                            <h2>SaaS 3D T-Shirt Customizer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
