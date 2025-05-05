import React from "react";
import TitleHeader from "../components/TitleHeader";
import { volunteers } from "../constants";
import GlowCard from "../components/GlowCard";

const VoulnteerExp = () => {
    return (
        <section id="volunteer" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Volunteer Experience"
                    sub="🌱 Growing Through Giving Back"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {volunteers.map((volunteer, index) => (
                        <GlowCard key={index} card={volunteer}>
                            <div className="flex flex-col gap-3">
                                {/* Role */}
                                <h1 className="font-semibold text-2xl">
                                    {volunteer.role}
                                </h1>
                                {/* Organization and Period */}
                                <p className="text-white-50 text-lg">
                                    {volunteer.organization} -{" "}
                                    {volunteer.period}
                                </p>
                                {/* Description */}
                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                    {volunteer.description.map((desc, idx) => (
                                        <li key={idx} className="text-lg">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoulnteerExp;
