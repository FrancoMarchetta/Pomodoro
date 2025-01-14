import React, { use, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Buttons';
import "./Css/StartPage.Css"
import "../../components/ComponentCss/Buttons.css"
import SideBar from '../../components/SideBar';
const Start = () => {

    const [seconds, setSeconds] = useState();
    const [backUpSeconds, setBackUpSeconds] = useState();
    const [isRunning, setIsRunning] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);



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
        audioRef.current.pause();
        setSeconds(backUpSeconds);
        setIsRunning(true);
    };


    const path = useNavigate();

    const GoToHome = () => {
        path("/");
        audioRef.current.pause(); // <-- para el sonido si es que esta sonando y vamos a la pestaña home
    }



    return (
        <>
            <Buttons onClick={GoToHome} text={"Go Back"}></Buttons>


            <br />
            <br />


            <main style={{ display: "flex" }}>

                <SideBar title={"Time Manager"}>
                    <div style={{ display: "flex", flexDirection: "column", placeItems: "center", gap: "20px" }}>

                        <Buttons onClick={() => {
                            setToggleModal(!toggleModal);
                            console.log(toggleModal);
                        }} text={"Set Timer"}>
                        </Buttons>

                        {toggleModal && (<>

                            <input
                                className='Buttons smallerShi'
                                value={seconds}
                                placeholder='enter time'
                                onChange={(e) => {
                                    setSeconds(e.target.value);
                                    setBackUpSeconds(e.target.value);
                                    setTimeout(() => {
                                        e.target.value = null;
                                    }, 2000);

                                }}>

                            </input>

                        </>)}

                        <Buttons onClick={() => {
                            setSeconds(null);
                            audioRef.current.pause();
                        }}
                            text={"Delete Timer"}></Buttons>
                    </div>

                    <p style={{ margin: "43dvh 0% 0% 2%" }}>🐱‍👤</p>

                </SideBar>

                <section className='mainSection'>


                    <div className={seconds === 0 ? 'chronometerZone chronometerZoneTest' : 'chronometerZone'}>
                        <h2>{seconds}</h2>
                        {seconds <= 0 && <Buttons onClick={restartTimer} text={"Restart"}></Buttons>}
                    </div>


                    <div className='buttonsZone'>
                        <Buttons onClick={() => { setIsRunning(false); audioRef.current.pause(); }} text={"Stop"}></Buttons>
                        <Buttons onClick={() => { setIsRunning(true) }} text={"Start"}></Buttons>
                    </div>



                </section>
            </main>
        </>
    )
}

export default Start