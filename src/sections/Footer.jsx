import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container flex flex-col items-center">
                {/* Social Icons */}
                <div className="socials mb-5">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a
                                href={socialImg.url}
                                className="icon"
                                key={index}
                                target="_blank"
                            >
                                <img
                                    src={socialImg.imgPath}
                                    alt="social icon"
                                />
                            </a>
                        </div>
                    ))}
                </div>
                {/* Copyright Message */}
                <div className="flex flex-col justify-center">
                    <p className="text-center">
                        © {new Date().getFullYear()} Amr Ibrahim. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
