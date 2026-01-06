import React from "react";
import { useParams } from "react-router-dom";


function CustomRouter() {

    const {generatedCR} = useParams()
    return(
        <div>
            <h1>'ID of custom router : {generatedCR}</h1>
        </div>
    )
 }



export default CustomRouter
