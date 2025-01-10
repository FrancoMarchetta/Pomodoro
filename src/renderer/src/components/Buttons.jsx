import React from 'react'
import "./ComponentCss/Buttons.css"
const Buttons = ({ onClick, text }) => {




    return (
        <>
            <button onClick={onClick} className='Buttons'>{text}</button>
        </>
    )
}

export default Buttons