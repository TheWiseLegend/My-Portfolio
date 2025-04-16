/* eslint-disable no-unused-vars */
const Button = ({ text, id, className }) => {
    return (
        <a className={`cta ${className ?? ""} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;
