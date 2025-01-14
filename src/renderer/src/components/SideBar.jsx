import React, { useState } from 'react'
import "./ComponentCss/SideBar.css"
import Buttons from './Buttons'
import TimerForm from "./TimerForm.jsx";
const SideBar = ({ title, children }) => {

    // const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <section className='SideBarSection'>

                <h2>{title}</h2>

                <div>{children}</div>

            </section>

        </>

    )
}

export default SideBar