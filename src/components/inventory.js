import TowerOfBabel from "../images/inventory/TowerOfBabel.JPG" 
import Judgement from "../images/inventory/Judgement.JPG" 
import RightWayUp from "../images/inventory/RightWayUp.JPG" 
import SpilledMilk from "../images/inventory/SpilledMilk.JPG" 
import Squeezed from "../images/inventory/Squeezed.JPG" 

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
        image: TowerOfBabel,
        name: "Tower of Babel", 
        desc: `In their hubris, humanity constructed the tower of babel to reach the heavens. In their endeavour,
                their speech was confounded, birthing the many languages we know today. This piece of metallic art
                commemorates the arrogance of man in machine form as it attempts to reach the domain of God through 
                nothing by Toyota and Peugeot brake discs, and a lot of rust.`,
        price: 2000,     
        stock: 1
    },
    {
        collection: "red",
        image: Judgement,
        name: "Judgement", 
        desc: `As the propane tank glares down on mere mortals, this cylinder of thick steel contains propane, 
                the lifeblood gas of the modern industrial era. Here, the container of this precious gas looks
                down upon humanity that attempt to contain its immense pressure, and judges them with an eyeless gaze.
                Two of these magnificent cylinders are being sold by The Collection, collect only.`,
        price: 600,     
        stock: 2
    },
    {
        collection: "red",
        image: RightWayUp,
        name: "Right Way Up", 
        desc: `Civilization would simply not fucntion without the forms of direction that we take for granted in the modern era.
                Our industries and sciences would cease to exists if up and down were not universally understood concepts. 
                But what if, in an act of infinite defiance, an object which only makes sense when the right way up, was turned 
                upside down. This is what The Collection's Right Way Up art piece attempts to ask the individual.`,        
        price: 200,     
        stock: 1
    },
    {
        collection: "red",
        image: SpilledMilk,
        name: "Spilled Milk", 
        desc: `There's no use crying over spilt milk, and certainly no use in trying to clean it up. This art piece is actually just made
                up of nails found in The Collection's headquarters that were knocked over recently by an irresponsible intern who has since 
                been fired. Averse to any kind of physical labour, we have no intention of cleaning it up, hence we are selling each nail at
                cost of £10, to be collected only.`,        
        price: 10,     
        stock: 173 
    },
    {
        collection: "red",
        image: Squeezed,
        name: "Squeezed", 
        desc: `The pressures of industrialization spare no one, and it is the weakest that are the first to be crushed under the relentless
                march of modernization. If this exhibit a diesel fuel filter acts as a stand in for the average man, who is being squeezed
                by the many externalities surrounding them. The Collection is happy to part with this subtle representation of societal pressure,
                on the condition that the buyer collects the item, as it smells of diesel and we would rather not handle it.`,        
        price: 700,     
        stock: 1 
    },
    // GREY
    {
        collection: "grey",
        image: TheSimp,
        name: "The Simp", 
        desc: `A simp has no face, no features, nothing to define them from the masses of men leading lives of quiet desperation.
                In this exhibit, The Simp represents the core structure of all those who's loneliness washes over their empty
                expressions, as they await for the reply text that will never come, from a Queen that will not reciprocate their love.`,        
        price: 1500,     
        stock: 1  
    },
    {
        collection: "grey",
        image: Confusion,
        name: "Confusion", 
        desc: `Wait, what? What is this drawing? what does it MEAN? How was it drawn? Who is it for? Where does it belong? Why are there
                just four arrows? When will this line of needless questioning start to lose its momentum? Perhaps now? Or maybe now? 
                These are the questions that have plagued our staff since we first took in this drawing, and the Collection is sick and tired of it.
                We are offering this drawing at a low price to anyone that can get it out of our sight.`,        
        price: 1,     
        stock: 1  
    },
    {
        collection: "grey",
        image: Perspective,
        name: "Perspective", 
        desc: `The houses go further and further into the distance never ending, never stopping, even when they reach base of the mountain.
                How big are those mountains? We don't know, for regardless of what your girlfriend told you 3 years ago before she left you 
                for that ukulele player, size does matter. The Collection is selling off this brilliant piece of art, which forces us to reckon
                with reality that size may be a subjective phenomenon base on perspective.`,        
        price: 1000,     
        stock: 1  
    },
    {
        collection: "grey",
        image: Sadness,
        name: "Sadness", 
        desc: `This drawing screams out for help under the black sun of day. Its cries are never heard, and its infinite anguish is never felt,
                simply for the cruel reason that it is smiling. When does the link between physical expression and inner emotions break down, 
                so that a smile may hide one's inner torment. The Collection has no idea, which is why we're selling off this drawing since
                it's creeping out some of the new interns. There are 3, which we will gladly deliver to you with a smile on our faces.`,        
        price: 650,     
        stock: 3  
    },
    // GOLD
    {
        collection: "gold",
        image: FingerBrothers,
        name: "FingerBrothers", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,        
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: TheShadow,
        name: "The Shadow", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,        
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: HardAndSoft,
        name: "Hard And Soft", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,        
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: Duck,
        name: "Duck", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,        
        price: 10,     
        stock: 1
    },
    {
        collection: "gold",
        image: NotHomer,
        name: "Not Homer", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,        
        price: 10,     
        stock: 1
    },
    //GREEN
    {
        collection: "green",
        image: Armoured,
        name: "Armoured", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,                
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: Family,
        name: "Family", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,                
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: Sweater,
        name: "Sweater", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,                
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: TheSiblings,
        name: "TheSiblings", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,                
        price: 10,     
        stock: 1
    },
    {
        collection: "green",
        image: TouchingTheSky,
        name: "Touching The Sky", 
        desc: `Nisi nulla minim et reprehenderit qui irure cillum aute laborum. 
                Eiusmod mollit ullamco sit culpa sint reprehenderit est esse officia laborum mollit sunt. 
                Excepteur ullamco et anim nulla consequat magna laboris sint incididunt. Aute. 
                Mollit fugiat qui veniam non voluptate do.`,                
        price: 10,     
        stock: 1
    },
]

// Adds Ids to inventory items to allow user to easily add-remove more items.
inventory.forEach((item, idx) => { item.id = idx })

export default inventory