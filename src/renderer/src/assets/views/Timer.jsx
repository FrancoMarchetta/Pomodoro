import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import "./Css/Timer.css"

const Timer = () => {
    const path = useNavigate();

    const [timer, setTimer] = useState(0);
    const [isTimerOn, setIsTimerOn] = useState(false);

    useEffect(() => {

        const interval = setInterval(() => {
            if (isTimerOn) {
                setTimer(timer + 1);
                console.log(timer);

            }
        }, 1000);

        return () => { clearInterval(interval) }

    }, [isTimerOn, timer]);

    const GoToHome = () => {
        path('/');

    };
    return (
        <>
            <Buttons onClick={GoToHome} text={'Go Back'}></Buttons>
            <br />
            <br />

            <main className='main-div'>

                <section className='timer-section'>
                    <h2>{timer}</h2>

                    <div style={{ marginBottom: "60px" }}>
                        <Buttons onClick={() => { setTimer(0) }} text={"Restart"}></Buttons>
                    </div>

                </section>

                <div className='buttonsZone'>
                    <Buttons onClick={() => { setIsTimerOn(false) }} text={'Stop'}></Buttons>
                    <Buttons onClick={() => { setIsTimerOn(true) }} text={'Start'}></Buttons>
                </div>



            </main>

        </>

    )
}

export default Timer