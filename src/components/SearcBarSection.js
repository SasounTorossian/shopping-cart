import React, {useState} from "react";
import inventory from "./inventory"
import Modal from "react-modal"
import { useHistory } from "react-router-dom"

const SearchBarSection = () => {
    const [products, setProducts] = useState(inventory)
    const [search, setSearch] = useState("")
    const history = useHistory()

    const closeModal = e => {
        e.stopPropagation();
        history.goBack();
    }

    const filteredProducts = products.filter((product) => {
        if (product.name.toLowerCase().includes(search)) { return product }
      });

    return (
        <div className="searchBarSection">
            {/* <Modal 
                isOpen={open} 
                ariaHideApp={false}
                onClick={closeModal}
            >
                <div className="modal-section">
                    <h2>Modal Title</h2>
                    <p>Modal Body</p>
                </div>
            </Modal> */}
            <div class="searchBar">
                <input className="input" onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}/>
                <button className="button">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="display">
                {filteredProducts.map((product) => (
                <div className="product">
                    <h3>{product.name}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBarSection
