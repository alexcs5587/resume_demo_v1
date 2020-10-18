import React from 'react'

export default function PortfolioCard(props) {
    const PortfolioLangComponents = props.card.lang.map(lang => <span key={lang} className="portfolio-lang rounded-pill">{lang}</span>)
    return (
        <div className="card col-lg-6" >
            <div className="imgcontainer"><img src={process.env.PUBLIC_URL + props.card.image} className="card-img-top" alt="" /></div>
            <div className="card-body">
                <h5 className="card-title">{props.card.title}</h5>{PortfolioLangComponents}
                <p className="card-text">{props.card.text}</p>
                {props.card.webLink === "" ? "" : <a href={"https://" + props.card.webLink} className="btn btn-primary mr-3">Website</a>}
                {props.card.codeLink === "" ? "" : <a href={"https://" + props.card.codeLink} className="btn btn-secondary">Code</a>}
            </div >
        </div >
    )
}