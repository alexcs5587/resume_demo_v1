import React from 'react'

function Profile() {
    return (
        <div className="row justify-content-center text-center ">

            {/* Profile */}
            <div className="name">Alex Chui</div>
            <p className="title rounded-pill">Graduate Developer</p>
            <p className="px-3 intro">IT fresh graduate with experience in various programming languages and frameworks.
                    Looking for an entry-level IT specialist position to utilize my skills and experience.</p>

            {/* Contact */}
            <div className="contact">
                <i className="fas fa-map-marker map"></i> Hong Kong<br />
                <i className="fas fa-envelope" aria-hidden="true"> </i> <a href="mailto:alexcs5587@gmail.com"> alexcs5587@gmail.com</a><br />
                <i className="fab fa-github" aria-hidden="true"> </i><a href='https://github.com/alexcs5587'> github.com/alexcs5587</a>
            </div>

            {/* Email */}
            <a href="mailto:alexcs5587@gmail.com" className="hvr-grow email btn rounded-pill px-5">Email me</a>
        </div >
    )
}

export default Profile