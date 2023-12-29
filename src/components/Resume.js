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
                            <p>Award GPA: 3.43/4.0</p>
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
                                Lands Department{" "}
                                <span className="d-inline-block ">
                                    (Summer Intern)
                                </span>
                            </div>
                            <span className="duty font-weight-bold">
                                Jun 2019 - Jul 2019
                            </span>
                            {/* <span className="duty">- Revamp the existing information systems using Excel VBA</span>
                            <span className="duty">- Perform system maintenance to enhance the efficiency of its daily operation</span>
                            <span className="duty">- Dealing with complicated documents</span> */}
                        </div>
                    </div>
                </div>
                {/* Technical Skills */}
                <div className="row">
                    <div className="col-lg-12 resume-box">
                        <div className="subtitle">
                            <i className="fas fa-tools" aria-hidden="true">
                                {" "}
                                Technical Skills
                            </i>
                        </div>
                        <div className="row">
                            {/* Languages & Frameworks/Libraries */}
                            <div className="col-lg-6">
                                <div className="resume-content">
                                    <div className="content-title">
                                        Languages & Frameworks/Libraries
                                    </div>
                                    {langItem}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* Tools */}
                                <div className="resume-content">
                                    <div className="content-title">Tools</div>
                                    {toolItem}
                                </div>
                                {/* Database */}
                                <div className="resume-content pt-0">
                                    <div className="content-title">
                                        Databases
                                    </div>
                                    {databaseItem}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
