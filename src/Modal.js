import React from 'react';
import Speech from 'react-speech';

export default function Modal(props) {

const {closeModal} = props;
const modal = document.querySelector(".container");


const {info} = props;
let infoModale = "" ;


console.log(props.readM);
console.log(props);

function outsideClick(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

if (props.readM ) {
    if (props.readM === "ElHefe" ) {
        infoModale = info[0];
    }else if (props.readM === "FairyTaleAle") {
        infoModale = info[1];
    }else if (props.readM === "GitHop") {
        infoModale = info[2];
    }else if (props.readM === "HollabackLager") {
        infoModale = info[3];
        infoModale.label = "hollabackLager.png" ;
    }else if (props.readM === "HoppilyEverAfter") {
        infoModale = info[4];
    }else if (props.readM === "Mowintime") {
        infoModale = info[5];
    }else if (props.readM === "Row26") {
        infoModale = info[6];
    }else if (props.readM === "RuinedChildhood") {
        infoModale = info[7];
    }else if (props.readM === "Sleighride") {
        infoModale = info[8];
    }else if (props.readM === "Steampunk") {
        infoModale = info[9];
    }


//     const speechText = infoModale.description.aroma + infoModale.description.appearance + infoModale.description.mouthfeel;
// console.log(speechText)

return (

    <div onClick = {outsideClick} className="container">
        <div className="modal ">
            <button onClick = {closeModal} id="close">X</button>
            <div id="general">
             <div id="titles">
                <h1>{infoModale.name}</h1>
                    <div id="cat">
                    <h2>{infoModale.category}</h2>
                    <h3>{infoModale.alc}</h3>
                 </div>
                 <Speech pitch="1" rate="0.9" volume="1.1" voice="Google UK English Male"  stop={true} pause={true} text={infoModale.description.overallImpression} />  
                 <p className="overallText"><span>OVERALL: </span>{infoModale.description.overallImpression}</p>
             </div>
            <img className ="modalImage" src={props.readM+".png"} alt="label goes here"></img>
            </div>
            <div className="description">
            <p><span>AROMA: </span>{infoModale.description.aroma}</p>
            <p><span>APPEARANCE: </span>{infoModale.description.appearance}</p>
            <p><span>MOUTHFEEL: </span>{infoModale.description.mouthfeel}</p>
          

                
            </div>
        </div>
        
    </div>
) 
} else {
    return (
        <div onClick = {outsideClick} className="container">
            <div className="modal ">   
                <p>Loading...</p>
                    

            </div>
                
        </div>
    )
}



}
