import React from 'react'
import Footer from "./Footer"


import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <div className="HomePage">
            <section className="page FirstPage">
                <div className="text-container">
                    <h2>The Red Collection</h2>
                    <p>
                        This collection compiles the twisted creations of modern
                        man into a cacophany of steel, iron, rust, and wire, which 
                        serve as a homage to mankind's industrial prowess
                    </p>
                    <p>
                        First discovered by Peggy Guggenheim in a recycling plant
                        while she was trying to dispose of over 5 tons of Coca-cola
                        cans, these works of metallic art are now being sold off by 
                        the Guggenheim estate.
                    </p>
                    <p>
                        To experience the beauty of cold steel and sharp edges
                        (careful not to cut yourself buddy), enter the Red Collection below.
                    </p>
                </div>
            </section>
            <section className="page SecondPage">
                <div className="text-container">
                    <h2>The Black & White Collection</h2>
                    <p>
                        This group of object highlights the sublime intersection 
                        of ink on paper, capturing the symbols and images that 
                        represent deeper ideas that bind us together as humans.
                    </p>
                    <p>
                        The origins of these drawings are varied, with one of them
                        being found hidden in the toilet tank of the famous 20th 
                        centuryavent-garde writer James Joyce, while another is 
                        thought to have been drawn by Hulk Hogan of WWE fame.
                    </p>
                    <p>
                        Regardless of where they originated from, these drawings 
                        can be found here, in the Black & White Collection.
                    </p>
                </div>
            </section>
            <section className="page ThirdPage">
                <div className="text-container">
                    <h2>The Brown Collection</h2>
                    <p>
                        Combining natural materials and seemingly random objects, 
                        this collection looks to reintroduce the artistc beauty 
                        of raw natual elements being moulded into art.
                    </p>
                    <p>
                        These masterpieces come from all over the world, and being 
                        constructed out of the natural materials unique to each region, 
                        each one holds within it a story telling its origin.
                    </p>
                    <p>
                        Due to the organic nature of these items, The Collection 
                        and all associated brands do not hold any legal liability for 
                        peices of art which are altered, damaged, or destroyed due to 
                        natural causes. Enter the Brown Collection.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
