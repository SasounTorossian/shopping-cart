import image_1 from "../images/1.jpg" 
import image_2 from "../images/2.jpg" 
import image_3 from "../images/3.jpg" 
import image_4 from "../images/4.jpg" 
import image_5 from "../images/5.jpg" 

const inventory = {
    red: [
        {
            id: 1,
            image: image_1,
            name: "cat", 
            descShort: "Meow meow",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do.",
            price: 20    
        },
        {
            id: 2,
            image: image_2,
            name: "cow", 
            descShort: "Moo moo",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 30    
        },
        {
            id: 3,
            image: image_3,
            name: "dog", 
            descShort: "bark bark",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 40    
        },
        {
            id: 4,
            image: image_4,
            name: "flamingo", 
            descShort: "? ?",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 40    
        },
        {
            id: 5,
            image: image_5,
            name: "whale", 
            descShort: "AAAAAAAAAA",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 40    
        },
    ],
    grey: [
        {
            id: 6,
            image: image_1,
            name: "beetle", 
            descShort: "Scuttle scuttle",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 50    
        }
    ],
    gold: [
        {
            id: 7,
            image: image_2,
            name: "duck", 
            descShort: "Quack quack",
            desc: "Nisi nulla minim et reprehenderit qui irure cillum aute laborum. Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute duis dolor non id non. Mollit fugiat qui veniam non voluptate do. Et laboris ipsum nulla id anim quis voluptate. Qui excepteur elit sint aliquip exercitation nisi veniam Lorem laborum esse excepteur consequat et esse.",
            price: 10    
        },
    ]
}

export default inventory