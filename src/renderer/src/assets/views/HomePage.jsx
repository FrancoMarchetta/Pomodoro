import React from 'react'
import "./Css/HomePage.css"
import Buttons from '../../components/Buttons'
const HomePage = () => {

    // funciones de los botones

    const quitApp = () => {
        electron.app.quit()

    }


    return (
        <>
            <main style={{ display: "flex", flexDirection: "column" }}>

                <section className='title'>
                    <h1>Pomodorium</h1>
                </section>




                <section style={{ gap: "10%", display: "flex", placeContent: "center", width: "100%", marginTop: "30%" }}>
                    <Buttons text={"Stop Song"}></Buttons>
                    <Buttons text={"Start"}></Buttons>

                </section>

            </main >
        </>
    )
}

export default HomePage