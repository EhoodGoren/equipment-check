import React from "react";
import SignatureCanvas from 'react-signature-canvas'

function Signature() {
    return(
        <SignatureCanvas penColor='green' backgroundColor="white"
        canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
    )
}

export default Signature;
