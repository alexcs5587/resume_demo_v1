import React from "react";

function Profile() {
    return (
        <div className="justify-content-center text-center ">
            {/* Profile */}
            <div className="name">Alex Chui</div>
            <span className="title rounded-pill">Application Developer</span>
            <p className="intro">
                As a results-driven Application Developer with 3 years of
                experience, I specialize in utilizing the latest technologies to
                enhance business processes and drive efficiency. I am actively
                exploring opportunities where my technical abilities and proven
                success managing projects can deliver greater impact.
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
                <i className="fab fa-linkedin" aria-hidden="true">
                    {" "}
                </i>
                <a href="https://www.linkedin.com/in/alexchui25/">
                    {" "}
                    linkedin.com/in/alexchui25/
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
