import React from "react";

function Profile() {
    return (
        <div className="justify-content-center text-center ">
            {/* Profile */}
            <div className="name">Alex Chui</div>
            <span className="title rounded-pill">Application Developer</span>
            <p className="intro">
                Results-driven Application Developer with 3 years of experience.
                Specialize in utilizing the latest technologies to enhance
                business processes and drive efficiency. Adept at all phases of
                the software development life cycle from specification and
                design through development, testing, deployment and maintenance.
            </p>

            {/* Contact */}
            <div className="contact">
                <i className="fas fa-map-marker map"></i> Hong Kong
                <br />
                <i className="fas fa-envelope" aria-hidden="true">
                    {" "}
                </i>{" "}
                <a href="mailto:alexcs5587@gmail.com"> alexcs5587@gmail.com</a>
                <br />
                <i className="fab fa-github" aria-hidden="true">
                    {" "}
                </i>
                <a href="https://github.com/alexcs5587">
                    {" "}
                    github.com/alexcs5587
                </a>
                <br />
                <i className="fab fa-linkedin" aria-hidden="true">
                    {" "}
                </i>
                <a href="https://www.linkedin.com/in/alexchui25/">
                    {" "}
                    linkedin.com/in/alexchui25
                </a>
            </div>

            {/* Email */}
            <a
                href="mailto:alexcs5587@gmail.com"
                className="hvr-grow email btn rounded-pill px-5"
            >
                Email me
            </a>
        </div>
    );
}

export default Profile;
