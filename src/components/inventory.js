import image_1 from "../images/1.jpg" 
import image_2 from "../images/2.jpg" 
import image_3 from "../images/3.jpg" 
import image_4 from "../images/4.jpg" 
import image_5 from "../images/5.jpg"

import TheSimp from "../images/inventory/TheSimp.JPG" 
import Confusion from "../images/inventory/Confusion.JPG" 
import Perspective from "../images/inventory/Perspective.JPG" 
import Sadness from "../images/inventory/Sadness.JPG" 

import FingerBrothers from "../images/inventory/FingerBrothers.JPG" 
import TheShadow from "../images/inventory/TheShadow.JPG" 
import HardAndSoft from "../images/inventory/HardAndSoft.JPG" 
import Duck from "../images/inventory/Duck.JPG" 
import NotHomer from "../images/inventory/NotHomer.JPG" 

import Armoured from "../images/inventory/Armoured.JPG"
import Sweater from "../images/inventory/Sweater.JPG"
import Family from "../images/inventory/Family.JPG"
import TheSiblings from "../images/inventory/TheSiblings.JPG"
import TouchingTheSky from "../images/inventory/TouchingTheSky.JPG"

const inventory = [
    // RED
    {
        collection: "red",
        image: image_1,
        name: "cat", 
        descShort: "Meow meow",
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,
        price: 20,     
        stock: 2
    },
    {
        collection: "red",
        image: image_2,
        name: "cow", 
        descShort: "Moo moo",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 30,     
        stock: 1
    },
    {
        collection: "red",
        image: image_3,
        name: "dog", 
        descShort: "bark bark",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 40,     
        stock: 4
    },
    {
        collection: "red",
        image: image_4,
        name: "flamingo", 
        descShort: "? ?",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 40,     
        stock: 1 
    },
    {
        collection: "red",
        image: image_5,
        name: "whale", 
        descShort: "AAAAAAAAAA",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 40,     
        stock: 1 
    },
    // GREY
    {
        collection: "grey",
        image: TheSimp,
        name: "The Simp", 
        descShort: "Scuttle scuttle",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 50,     
        stock: 3  
    },
    {
        collection: "grey",
        image: Confusion,
        name: "Confusion", 
        descShort: "Scuttle scuttle",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 50,     
        stock: 3  
    },
    {
        collection: "grey",
        image: Perspective,
        name: "Perspective", 
        descShort: "Scuttle scuttle",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 50,     
        stock: 3  
    },
    {
        collection: "grey",
        image: Sadness,
        name: "Sadness", 
        descShort: "Scuttle scuttle",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 50,     
        stock: 3  
    },
    // GOLD
    {
        collection: "gold",
        image: FingerBrothers,
        name: "FingerBrothers", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: TheShadow,
        name: "The Shadow", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: HardAndSoft,
        name: "Hard And Soft", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: Duck,
        name: "Duck", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: NotHomer,
        name: "Not Homer", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    //GREEN
    {
        collection: "green",
        image: Armoured,
        name: "Armoured", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: Family,
        name: "Family", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: Sweater,
        name: "Sweater", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: TheSiblings,
        name: "TheSiblings", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: TouchingTheSky,
        name: "Touching The Sky", 
        descShort: "Quack quack",
        desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. Mollit fugiat qui veniam non voluptate do. Etm quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
        price: 10,     
        stock: 1
    },
]

// Adds Ids to inventory items to allow user to easily add-remove more items.
inventory.forEach((item, idx) => { item.id = idx })

export default inventory