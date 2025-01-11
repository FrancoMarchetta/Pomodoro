import React from 'react'
import "./ComponentCss/SideBar.css"
import Buttons from './Buttons'
const SideBar = () => {
    return (
        <>
            <section className='SideBarSection'>
                <h2>Timer Manager</h2>

                <div style={{ display: "flex", flexDirection: "column", placeItems: "center", gap: "20px" }}>
                    <Buttons text={"create Timer"}></Buttons>
                    <Buttons text={"Delete Timer"}></Buttons>
                </div>


            </section>
        </>

    )
}

export default SideBar