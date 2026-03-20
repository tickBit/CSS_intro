import { React, useEffect, useRef, useState } from 'react';

const Span = () => {

    const scrollText = "I should turn the page and accept, that Amiga is a retro computer only. I'm alive, it's alive... The tha grass was greener and light brighter... ";

    const [text, setText] = useState(scrollText);

    return (
        <>
        <div className='scroll'>
        <span>
            {text}
        </span>
        </div>
        <br />
        </>
    )
}

export default Span;
