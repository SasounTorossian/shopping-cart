import React, { useEffect, useState } from 'react';
import { withRouter, useHistory  } from 'react-router-dom';
import inventory from "./inventory"

const SearchModal = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")

    const closeModal = e => {
        e.stopPropagation();
        history.goBack();
    }

    // useEffect(() => {
    //     document.body.classList.add("overflow-hidden");
    
    //     return () => {
    //       document.body.classList.remove("overflow-hidden");
    //     };
    // }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredItems = inventory.filter((item) => {
        const itemLowerCase = item.name.toLowerCase()
        const searchLowerCase = search.toLocaleLowerCase()
        if (itemLowerCase.includes(searchLowerCase) && searchLowerCase) { return item }
    });

    return (
        <div className="modal-search-wrapper" onClick={closeModal} >
            <div className="modal-search-inner" onClick={(e) => e.stopPropagation()}>
                <div className="modal-search-searchbar">
                    <input className="modal-search-input" onChange={handleSearch}/>
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
                    {filteredItems.map((product, idx) => (
                        <div className="modal-search-item" key={idx}>
                            <h3>{product.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchModal