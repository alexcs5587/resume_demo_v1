import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioCard from "./PortfolioCard"
import PortfolioCardData from "./PortfolioCardData"

function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio';
    })
    const PortfolioCardComponents = PortfolioCardData.map(cardData => <PortfolioCard key={cardData.title} PortfoliocardData={cardData} />)
    return (
        <div>
            <div className="title">Portfolio
                <Link to="/"><button className="btn link rounded-pill"><i className="fas fa-link"></i> Resume</button></Link>
            </div>
            <div className="row">
                {PortfolioCardComponents}
            </div>
        </div >
    )
}

export default Portfolio
