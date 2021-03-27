import "./SearchModal.css"
import React, { useState } from 'react';
import { useHistory, Link  } from 'react-router-dom';
import { motion } from "framer-motion"
import inventory from "../inventory"

const PageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0 
    }
}

// Component that implements the search bar as a modal.
const SearchModal = ({ position }) => {
    const history = useHistory()
    const [search, setSearch] = useState("")
    const [wrapperShade, setWrapperShade] = useState("dark")

    // Close modal and return to previous page when clicking on outside region.
    const closeModal = (e) => {
        e.stopPropagation();
        history.goBack();
    }

    // Handle searach input.
    const handleSearch = (e) => { setSearch(e.target.value) }

    // Filter inventory items based on search input.
    const filteredItems = inventory.filter((item) => {
        const itemLowerCase = item.name.toLowerCase()
        const searchLowerCase = search.toLocaleLowerCase()
        if (itemLowerCase.includes(searchLowerCase) && searchLowerCase) { return item }
        else { return null }
    });

    // Make modal slightly darker when in exit-click region.
    const modalWrapperShade = () => {
        return wrapperShade === "light" ? "modal-search-wrapper-light" : "modal-search-wrapper-dark"
    }

    return (
        <motion.div 
            className={`modal-search-wrapper ${modalWrapperShade()}`} 
            onClick={closeModal}
            variants={PageTransition}
            initial="out"
            animate="in"
            exit="out"
        >
            <div 
                className="modal-search-inner" 
                style={{ right: position }}
                onClick={(e) => e.stopPropagation()} 
                onMouseLeave={() => setWrapperShade("dark")}
                onMouseEnter={() => setWrapperShade("light")}
            >
                <div className="modal-search-searchbar">
                    <input className="modal-search-input" onChange={handleSearch} autoFocus/>
                    <button className="modal-search-button">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="modal-search-results">
                    {filteredItems.map((item, idx) => (
                        <Link to={`/shoppingpage/${item.collection}/${item.id}`} key={idx} className="modal-search-item">
                            <h3>{item.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default SearchModal