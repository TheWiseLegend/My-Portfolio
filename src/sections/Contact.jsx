
import React, { useState, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get In Touch With Me"
                    sub="✉️ Contact Information"
                />
                <div className="mt-16 flex justify-center">
                    <div className="w-full max-w-3xl ">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                                ref={formRef}
                            >
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading
                                                ? "Sending..."
                                                : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img
                                                src="/images/arrow-down.svg"
                                                alt="arrow"
                                            />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
