import React from 'react' 

// alter to prop : directly use '{coderName = @monsteerMind}', it increases the readability of code
function Card(props) {
    console.log("value at props :", props);
    console.log("value at usename :", props.coderName);
    
    return(
        <>
        <h3>first card component </h3>

        <h4> -- <i>by <b>{props.coderName || "anyDefaultValue"}</b> </i> </h4>
        <br />
        <h4> -- <i>by <b>{props.coderName}</b> </i> </h4>
        <hr />
        </>
    )
}


export default Card;