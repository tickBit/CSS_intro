import React, { useState, useEffect } from "react";

const Ball = (props) => {

    return (
        <div className="ball-position">
            <div className="h-128 animate-bounce">
                <div className="w-16 h-16 rounded-full animate-spin" style={{color: "whitesmoke", backgroundImage: props.color}}>{props.letter}</div>
            </div>
            <div className="number text-4xl">{props.letter}</div>
        </div>
        
    )
}

export default Ball;