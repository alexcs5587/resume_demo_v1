import React from 'react'

function PortfolioCard(props) {
    const ProjectLanguage = props.card.language.map(language => <span key={language} className="portfolio-lang rounded-pill">{language}</span>)
    return (
        <div className="card col-lg-6" >
            <div className="imgcontainer"><img src={process.env.PUBLIC_URL + props.card.image} className="card-img-top" alt="" /></div>
            <div className="card-body">
                <h5 className="card-title">{props.card.title}</h5>{ProjectLanguage}
                <p className="card-text">{props.card.text}</p>
                {props.card.webLink === "" ? "" : <a href={"https://" + props.card.webLink} className="btn btn-primary mr-3 hvr-pulse">Website</a>}
                {props.card.codeLink === "" ? "" : <a href={"https://" + props.card.codeLink} className="btn btn-secondary hvr-pulse">Code</a>}
            </div >
        </div >
    )
}

export default PortfolioCard