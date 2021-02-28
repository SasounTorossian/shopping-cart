import React from 'react'

import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <div className="HomePage">
            <Link to="/shoppingpage">
                <div>Shop Now</div>
            </Link>
        </div>
    )
}

export default HomePage
