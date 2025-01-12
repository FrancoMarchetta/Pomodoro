import React, { use, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Buttons';
import "./Css/StartPage.Css"
import SideBar from '../../components/SideBar';
const Start = () => {

    const [seconds, setSeconds] = useState(5);
    const [isRunning, setIsRunning] = useState(false);

    const audioRef = useRef(null);


    useEffect(() => {
        if (seconds === 0) {
            // Reproduce el audio una sola vez
            if (!audioRef.current) {
                audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
                audioRef.current.loop = true; // Repetir el audio
                audioRef.current.play().catch((error) => {
                    console.log("Error reproduciendo el audio:", error);
                });
            }
        }

        if (seconds > 0 && audioRef.current) {
            // Detén el audio si el temporizador se reinicia
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
    }, [seconds]);

    useEffect(() => {
        if (isRunning && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isRunning, seconds]);

    const restartTimer = () => {
        setSeconds(5);
        setIsRunning(true);
    };


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
                        {seconds <= 0 && <Buttons onClick={restartTimer} text={"Restart"}></Buttons>}
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