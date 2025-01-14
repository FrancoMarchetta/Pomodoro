import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import './Css/StartPage.Css';
import '../../components/ComponentCss/Buttons.css';
import SideBar from '../../components/SideBar';

const Start = () => {
    const [minutes, setMinutes] = useState(0);
    const [backUpMinutes, setBackUpMinutes] = useState(0);

    const [seconds, setSeconds] = useState(0);
    const [backUpSeconds, setBackUpSeconds] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    const audioRef = useRef(null);

    // Manejo de temporizador
    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                } else if (minutes > 0) {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    setSeconds(59);
                } else {
                    // Detener el temporizador y reproducir audio
                    clearInterval(interval);
                    if (!audioRef.current) {
                        audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
                        audioRef.current.loop = true;
                        audioRef.current.play().catch((error) => {
                            console.log('Error reproduciendo el audio:', error);
                        });
                    }
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isRunning, minutes, seconds]);

    const restartTimer = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
        setMinutes(backUpMinutes);
        setSeconds(backUpSeconds);
        setIsRunning(true);
    };

    const path = useNavigate();

    const GoToHome = () => {
        path('/');
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return (
        <>
            <Buttons onClick={GoToHome} text={'Go Back'}></Buttons>
            <br />
            <br />
            <main style={{ display: 'flex' }}>
                <SideBar title={'Time Manager'}>
                    <div style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', gap: '20px' }}>
                        <Buttons
                            onClick={() => {
                                setToggleModal(!toggleModal);
                            }}
                            text={'Set Timer'}
                        ></Buttons>

                        {toggleModal && (
                            <>
                                <input
                                    className='Buttons smallerShi'
                                    type='text'
                                    placeholder='Enter minutes'
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value, 10) || 0;
                                        setMinutes(value);
                                        setBackUpMinutes(value);
                                    }}
                                />
                                <input
                                    className='Buttons smallerShi'
                                    type='text'
                                    placeholder='Enter seconds'
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value, 10) || 0;
                                        setSeconds(value);
                                        setBackUpSeconds(value);
                                    }}
                                />
                            </>
                        )}

                        <Buttons
                            onClick={() => {
                                setMinutes(0);
                                setSeconds(0);
                                if (audioRef.current) {
                                    audioRef.current.pause();
                                    audioRef.current.currentTime = 0;
                                    audioRef.current = null;
                                }
                            }}
                            text={'Delete Timer'}
                        ></Buttons>
                    </div>
                    <p style={{ margin: '43dvh 0% 0% 2%' }}>🐱‍👤</p>
                </SideBar>
                <section className='mainSection'>
                    <div className={seconds === 0 && minutes === 0 ? 'chronometerZone chronometerZoneTest' : 'chronometerZone'}>
                        <h2>
                            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                        </h2>
                        {seconds === 0 && minutes === 0 && <Buttons onClick={restartTimer} text={'Restart'}></Buttons>}
                    </div>
                    <div className='buttonsZone'>
                        <Buttons onClick={() => setIsRunning(false)} text={'Stop'}></Buttons>
                        <Buttons onClick={() => setIsRunning(true)} text={'Start'}></Buttons>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Start;
