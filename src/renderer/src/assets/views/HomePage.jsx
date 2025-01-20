import React from 'react'
import "./Css/HomePage.css"
import Buttons from '../../components/Buttons'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    // funciones de los botones

    const path = useNavigate();

    const goToChronometer = () => {
        path("/chronometer")
    }

    const goToTimer = () => {
        path("/timer")

    }

    const quitApp = () => {
        app.quit()

    }


    return (
        <>
            <main style={{ display: "flex", flexDirection: "column" }}>

                <section className='title'>
                    <h1>Pomodorium</h1>
                </section>




                <section style={{ gap: "10%", display: "flex", placeContent: "center", width: "100%", marginTop: "30%" }}>
                    <Buttons onClick={goToTimer} text={"timer"}></Buttons>
                    <Buttons onClick={goToChronometer} text={"chronometer"}></Buttons>
                </section>

                <div className='div-btn-github'>

                    <a href="https://github.com/FrancoMarchetta" target='_blank' >
                        <Buttons text={"GitHub"}></Buttons>
                    </a>
                </div>


            </main >
        </>
    )
}

export default HomePage