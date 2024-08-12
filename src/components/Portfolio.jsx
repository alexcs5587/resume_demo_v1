import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom'
import PortfolioCard from "./PortfolioCard"
import PortfolioCardData from "./PortfolioCardData"

const PER_PAGE = 4;

function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio';
    })
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE;

    const pageCount = Math.ceil(PortfolioCardData.length / PER_PAGE);

    return (
        <div>
            <div className="title">Portfolio
        <Link to="/" > <button className="btn link rounded-pill"><i className="fas fa-link"></i> Resume</button></Link >
            </div >
            <div className="row">
                {PortfolioCardData.slice(offset, offset + PER_PAGE).map(cardData => <PortfolioCard key={cardData.title} PortfoliocardData={cardData} />)}
            </div>
            <div className="pagination-container">
                <ReactPaginate
                    previousLabel={"←"}
                    nextLabel={"→"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination-link"}
                    nextLinkClassName={"pagination-link"}
                    disabledClassName={"pagination-link-disabled"}
                    activeClassName={"pagination-link-active"}
                />
            </div>
        </div>
    )
}

export default Portfolio
