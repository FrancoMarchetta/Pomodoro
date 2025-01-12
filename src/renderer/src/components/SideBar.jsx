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

                <p style={{ margin: "43dvh 0% 0% 2%" }}>🐱‍👤</p>

            </section>
        </>

    )
}

export default SideBar