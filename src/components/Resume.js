import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TechSkillsData from "./TechSkillsData";

function Resume() {
    useEffect(() => {
        document.title = "Resume";
    });

    // split the Technical Skills list into item
    const langItem = TechSkillsData.langList.map((item) => (
        <span key={item} className="tech-btn rounded-pill">
            {item}
        </span>
    ));
    const toolItem = TechSkillsData.toolList.map((item) => (
        <span key={item} className="tech-btn rounded-pill">
            {item}
        </span>
    ));
    const databaseItem = TechSkillsData.databaseList.map((item) => (
        <span key={item} className="tech-btn rounded-pill">
            {item}
        </span>
    ));

    return (
        <div>
            <div className="title">
                Resume
                <Link to="/portfolio">
                    <button className="btn link rounded-pill">
                        <i className="fas fa-link"></i> Portfolio
                    </button>
                </Link>
            </div>
            <div className="resume">
                <div className="row">
                    {/* Education */}
                    <div className="col-lg-6 resume-box">
                        <div className="subtitle">
                            <i
                                className="fas fa-graduation-cap"
                                aria-hidden="true"
                            >
                                {" "}
                                Education
                            </i>
                        </div>
                        <div className="resume-content">
                            <div className="content-title">
                                Bachelor of Computing with Honours in Internet
                                Technology
                            </div>
                            <p>Hong Kong Metropolitan University | 2016-2020</p>
                        </div>

                        <div className="subtitle">
                            <i className="fas fa-tools" aria-hidden="true">
                                {" "}
                                Technical Skills
                            </i>
                        </div>
                        {/* Languages & Frameworks/Libraries */}
                        <div className="resume-content">
                            <div className="content-title">
                                Languages & Frameworks/Libraries
                            </div>
                            {langItem}
                        </div>
                        {/* Tools */}
                        <div className="resume-content">
                            <div className="content-title">Tools</div>
                            {toolItem}
                        </div>
                        {/* Database */}
                        <div className="resume-content pt-0">
                            <div className="content-title">Databases</div>
                            {databaseItem}
                        </div>
                    </div>

                    {/* Working Experience */}
                    <div className="col-lg-6 resume-box">
                        <div className="subtitle">
                            <i className="fas fa-briefcase" aria-hidden="true">
                                {" "}
                                Experience
                            </i>
                        </div>
                        <div className="resume-content">
                            <div className="content-title">
                                Central Business Information Limited{" "}
                                <span className="d-inline-block ">
                                    (Senior Application Developer)
                                </span>
                            </div>
                            <span className="duty font-weight-bold">
                                Dec 2020 - Present
                            </span>
                            <span className="duty">
                                • Build robotic process automation systems to
                                reduce over 90% manual operations and
                                significantly increase productivity
                            </span>
                            <span className="duty">
                                • Design and develop databases to efficiently
                                store and access large datasets for business
                                intelligence and analytics{" "}
                            </span>
                            <span className="duty">
                                • Develop AI solutions using technologies like
                                OpenAI to automate business processes and
                                enhance decision making{" "}
                            </span>
                            <span className="duty">
                                •Supervise a team of developers and oversee
                                projects from conception to launch{" "}
                            </span>
                            <span className="duty">
                                {" "}
                                • Support manager in engaging with end-users to
                                identify requirements, discuss solutions and
                                achieve business objectives.
                            </span>
                        </div>

                        <div className="resume-content">
                            <div className="content-title">
                                Lands Department{" "}
                                <span className="d-inline-block ">
                                    (Summer Intern)
                                </span>
                            </div>
                            <span className="duty font-weight-bold">
                                Jun 2019 - Jul 2019
                            </span>
                            <span className="duty">
                                {" "}
                                • Revamp the existing information systems using
                                Excel VBA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
