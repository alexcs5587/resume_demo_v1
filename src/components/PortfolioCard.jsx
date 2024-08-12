import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function PortfolioCard(props) {
    const cardData = props.PortfoliocardData
    const ProjectLanguage = cardData.language.map(language => <span key={language} className="portfolio-lang rounded-pill">{language}</span>)
    return (
        <div className="card col-lg-6" >
            <div className="imgcontainer"><Zoom><img src={import.meta.env.BASE_URL + cardData.image} className="card-img-top" alt="" /></Zoom></div>
            <div className="card-body">
                <h5 className="card-title">{cardData.title}</h5>
                {ProjectLanguage}
                <p className="card-text">{cardData.text}</p>
                {cardData.webLink === "" ? "" : <a href={"https://" + cardData.webLink} className="btn btn-primary mr-3 hvr-pulse">Website</a>}
                {cardData.codeLink === "" ? "" : <a href={"https://" + cardData.codeLink} className="btn btn-secondary hvr-pulse">Code</a>}
            </div >
        </div >
    )
}

export default PortfolioCard