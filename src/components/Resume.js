import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Resume extends Component {
    componentDidMount() {
        document.title = 'Resume';
    }
    render() {
        const langlist = ["HTML5", "CSS3", "JavaScript", "React", "Node.js",
            "Express.js", "Python", "PHP", "Spring Framework",
            "C#", "SQL", "Excel VBA"]
        const toollist = ["Git", "Visual Studio", "Apache Tomcat",
            "Netbeans", "Spyder", "Unity", "Microsoft Office", "Adobe Premiere Pro"]
        const langItem = langlist.map(item => <span key={item} className="tech-btn rounded-pill">{item}</span>)
        const toolItem = toollist.map(item => <span key={item} className="tech-btn rounded-pill">{item}</span>)
        return (
            <div>
                <div className="title">Resume<Link to="/portfolio"><button className="btn link rounded-pill"><i className="fas fa-link"></i> Portfolio</button></Link></div>
                <div className="resume">
                    <div className="row">
                        <div className="col-lg-6 resume-box">
                            <div className="subtitle">
                                <i className="fas fa-graduation-cap" aria-hidden="true"> Education</i>
                            </div>
                            <div className="resume-content">
                                <div className="content-title">Bachelor of Computing with Honours in Internet Technology</div>
                                <p>The Open University of Hong Kong | 2016-2020</p>
                            </div>
                        </div>
                        <div className="col-lg-6 resume-box">
                            <div className="subtitle">
                                <i className="fas fa-briefcase" aria-hidden="true"> Experience</i>
                            </div>
                            <div className="resume-content">
                                <div className="content-title">Lands Department <span className="d-inline-block ">(Summer Intern)</span></div>
                                <span className="duty font-weight-bold">Jun 2019 - Jul 2019</span>
                                <span className="duty">- Revamp the existing computer systems using Excel VBA</span>
                                <span className="duty">- Perform system maintenance to enhance the efficiency of its daily operation</span>
                                <span className="duty">- Dealing with complicated documents</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 resume-box">
                            <div className="subtitle">
                                <i className="fas fa-tools" aria-hidden="true"> Technical Skills</i>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="resume-content">
                                        <div className="content-title">Languages & Frameworks/Libraries</div>
                                        {langItem}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="resume-content">
                                        <div className="content-title">Tools</div>
                                        {toolItem}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Resume
