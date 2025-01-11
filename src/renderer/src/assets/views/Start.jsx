import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Buttons';
import "./Css/StartPage.Css"
import SideBar from '../../components/SideBar';
const Start = () => {

    const [seconds, setSeconds] = useState(5);
    const [isRunning, setIsRunning] = useState(false);



    useEffect(() => {
        if (isRunning && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(interval); // Detiene el intervalo cuando llega a 0
                        setIsRunning(false); // Detiene el temporizadora
                        return 0;
                    }
                    return prevSeconds - 1; // Reduce el contador en 1
                });
            }, 1000);

            return () => clearInterval(interval); // Limpieza del intervalo
        }
    }, [isRunning, seconds]); // Vuelve a ejecutar cuando cambian isRunning o seconds

    const path = useNavigate();

    const GoToHome = () => {
        path("/");
    }

    return (
        <>
            <Buttons onClick={GoToHome} text={"Go Back"}></Buttons>
            <br />
            <br />

            <main style={{ display: "flex" }}>

                <SideBar></SideBar>




                <search className='mainSection'>


                    <div className='chronometerZone'>
                        <h2>{seconds}</h2>
                    </div>

                    <div className='buttonsZone'>
                        <Buttons onClick={() => { setIsRunning(false) }} text={"Stop"}></Buttons>
                        <Buttons onClick={() => { setIsRunning(true) }} text={"Start"}></Buttons>
                    </div>



                </search>
            </main>
        </>
    )
}

export default Start