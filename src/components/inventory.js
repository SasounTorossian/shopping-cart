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
import Stubborn from "../images/inventory/Stubborn.JPG"

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
        desc: `Here, this majestic container of propane looks down upon humanity that attempt to contain its immense pressure, 
                and judges them with an eyeless gaze. Two of these magnificent cylinders are being sold by The Collection, collect only.
                The Propane tanks do not come with propane accessories.`,
        price: 600,     
        stock: 2
    },
    {
        collection: "red",
        image: RightWayUp,
        name: "Right Way Up", 
        desc: `Civilization would simply not function without the forms of direction that we take for granted in the modern era.
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
        desc: `The houses go further and further into the distance never ending, never stopping, even when they reach the base of the mountain.
                How big are those mountains? We don't know, for regardless of what your girlfriend told you 3 years ago before she left you 
                for that ukulele player, size does matter. The Collection is selling off this brilliant piece of art, which forces us to reckon
                with the reality that size may be a subjective phenomenon base on perspective.`,        
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
        name: "The Brothers Dexterous", 
        desc: `What are fingers, if not ornaments with which one manipulates the world around them. With The Brothers Dexterous, this question
                is fearlessly asked for anyone willing to answer it. The little brother is to be used, while the big brother is a user. 
                This inevitably leads to tension between the two, which is why The Collection recommends buyers to keep them separate.`,        
        price: 2000,     
        stock: 1
    },
    {
        collection: "gold",
        image: TheShadow,
        name: "The Shadow", 
        desc: `The item is not the doll itself, but rather, the shadow it casts. This exhibit seeks to interrogate the artistic beauty of the
                evil found within all humans, by having a relatively modest figure cast an ominous shadow. The Collection reccomends buyers
                also purchase a lamp to illuminate the The Shadow with.`,        
        price: 4000,     
        stock: 1
    },
    {
        collection: "gold",
        image: HardAndSoft,
        name: "Hard and Soft", 
        desc: `What happens when an incredibly light objects is glued to an incredibly hard surface? The answer is The Collection's Hard and Soft
                exhibit. Made using the feathers from a now extincy species of South American bird (We killed the last one to get it), and the 
                hollowed horn of another extinct African cattle (We also killed the last one), this exhibit demonstrates that the opposing forces of 
                hard and soft continue even after death. Animals were harmed in the making of this exhibit`,        
        price: 6000,     
        stock: 1
    },
    {
        collection: "gold",
        image: Duck,
        name: "Duck", 
        desc: `It's a duck`,        
        price: 9999,     
        stock: 1
    },
    {
        collection: "gold",
        image: NotHomer,
        name: "Not Homer", 
        desc: `This is not Homer Simpson from the critically acclaimed 1990s sitcom, The Simpsons. The Collection will not tolerate any reference
                to any trademarked character of any copyrighted piece of media. The Collection reserves all rights to refuse questioning regarding
                the origins of this exhibit, and all questions will be forwarded to our legal team for further scrutiny and rebuttal.`,        
        price: 25000,     
        stock: 1
    },
    //GREEN
    {
        collection: "green",
        image: Armoured,
        name: "Armoured", 
        desc: `When one is as small as an average aloe vera plant, the only real defense against the cruelty of the world is to hide behind a
                strong suit of armour. The Collection is selling off this incredible piece of biological artwork to anyone willing to put up
                with an emotionally distant plant.`,                
        price: 1000,     
        stock: 1
    },
    {
        collection: "green",
        image: Family,
        name: "Family", 
        desc: `When a tight bond is made between family members, it can be difficult to separate them. Not only that, but their roots are all
                one and the same, as seen through the transparent glass. The Collection is willing to sell this exhibit to anyone who doesn't 
                mind being adopted by these plants.`,                
        price: 1800,     
        stock: 1
    },
    {
        collection: "green",
        image: Sweater,
        name: "Sweater", 
        desc: `Even plants get cold. Sweater reminds us of this fact by keeping the plant it is attached to nice and warm regardless of how 
                low the temperature outside will drop. Please note that Sweater is actually the fabric surrounding the plant, not the plant
                itself. The Collection does not guarantee that the plant will come with Sweater.`,                
        price: 1500,     
        stock: 1
    },
    {
        collection: "green",
        image: TheSiblings,
        name: "The Siblings", 
        desc: `They hate each other. Ever since they were children, Ernest and Edward would always make fun of Harry for his name that didn't 
                begin with "E". However, Ernest and Edward secretly hate each other too, since they have different names. The Collection is sick
                of dealing with these little brats and is selling them off individually to separate buyers.`,                
        price: 700,     
        stock: 3
    },
    {
        collection: "green",
        image: Stubborn,
        name: "Stubborn", 
        desc: `We've tried to sell this one off, but it's just too stubborn. It refuses to allow us to increase its stock count above 0.`,                
        price: 10,     
        stock: 0
    },
]

// Adds Ids to inventory items to allow user to easily add-remove more items.
inventory.forEach((item, idx) => { item.id = idx })

export default inventory