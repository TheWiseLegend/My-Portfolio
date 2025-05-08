import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TechStack = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🧑‍💻 The Skills I Bring to the Table"
                />

                <div className="tech-grid">
                    {isMobile
                        ? techStackImgs.map((img) => (
                              <div
                                  key={img.name}
                                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                              >
                                  <div className="tech-card-animated-bg" />
                                  <div className="tech-card-content">
                                      <div className="tech-icon-wrapper">
                                          <img
                                              src={img.imgPath}
                                              alt={img.name}
                                          />
                                      </div>
                                      <div className="padding-x w-full">
                                          <p>{img.name}</p>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : techStackIcons.map((icon) => (
                              <div
                                  key={icon.name}
                                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                              >
                                  <div className="tech-card-animated-bg" />
                                  <div className="tech-card-content">
                                      <div className="tech-icon-wrapper">
                                          <TechIcon model={icon} />
                                      </div>
                                      <div className="padding-x w-full">
                                          <p>{icon.name}</p>
                                      </div>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
