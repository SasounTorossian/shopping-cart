import "./HomePage.css"
import React from 'react'
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const PageVariants = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0 
    }
}

// Homepage component that gives introduction to website.
const HomePage = () => {
    return (
        <motion.div 
            className="HomePage" 
            variants={PageVariants}
            initial="out"
            animate="in"
            exit="out"
        >
            <section className="page FirstPage">
                <div className="text-container">
                    <div className="header-container">
                        <p> The <span>Red</span> Collection </p>
                    </div>
                    <p>
                        This collection compiles the twisted creations of modern
                        man into a cacophany of steel, iron, rust, and wire, which 
                        serve as a homage to mankind's industrial prowess.
                    </p>
                    <Link to="/shoppingpage/red" className="home-link">
                        <h3>Shop The Red Collection</h3>
                    </Link>
                </div>
            </section>
            <section className="page SecondPage">
                <div className="text-container">
                    <div className="header-container">
                        <p> The <span>Grey</span> Collection </p>
                    </div>  
                    <p>
                        This group of object highlights the sublime intersection 
                        of ink on paper, capturing the symbols and images that 
                        represent deeper ideas that bind us together as humans.
                    </p>
                    <Link to="/shoppingpage/grey" className="home-link">
                        <h3>Shop The Grey Collection</h3>
                    </Link>
                </div>
            </section>
            <section className="page ThirdPage">
                <div className="text-container">
                    <div className="header-container">
                        <p> The <span>Gold</span> Collection </p>
                    </div>  
                    <p>
                        Combining natural materials and seemingly random objects, 
                        this collection looks to reintroduce the artistic beauty 
                        of raw natual elements being moulded into art.
                    </p>
                    <Link to="/shoppingpage/gold" className="home-link">
                        <h3>Shop The Gold Collection</h3>
                    </Link>
                </div>
            </section>
            <section className="page FourthPage">
                <div className="text-container">
                    <div className="header-container">
                        <p> The <span>Green</span> Collection </p>
                    </div>  
                    <p>
                        Showcasing the splendid beauty of all things biological,
                        this collection reminds humanity of its natual roots and
                        continued dependancy on nature.

                    </p>
                    <Link to="/shoppingpage/green" className="home-link">
                        <h3>Shop The Green Collection</h3>
                    </Link>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}

export default HomePage
