import React, { useState } from 'react'
import "./ComponentCss/SideBar.css"
import Buttons from './Buttons'
import TimerForm from "./TimerForm.jsx";
const SideBar = ({ title }) => {

    const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <section className='SideBarSection'>

                <h2>{title}</h2>

                <div style={{ display: "flex", flexDirection: "column", placeItems: "center", gap: "20px" }}>
                    <Buttons onClick={() => {
                        setToggleModal(!toggleModal);
                        console.log(toggleModal);
                    }} text={"create Timer"}>
                    </Buttons>



                    {toggleModal ? <TimerForm></TimerForm> : null}

                    <Buttons text={"Delete Timer"}></Buttons>
                </div>

                <p style={{ margin: "43dvh 0% 0% 2%" }}>🐱‍👤</p>

            </section>

        </>

    )
}

export default SideBar