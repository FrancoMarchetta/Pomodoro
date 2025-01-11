import React from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Buttons';
import "./Css/StartPage.Css"
import SideBar from '../../components/SideBar';

const Start = ({ timer }) => {

    timer = 0;



    const path = useNavigate();

    const GoToHome = () => {
        path("/")
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
                        <h2> {timer}</h2>
                    </div>

                    <div className='buttonsZone'>
                        <Buttons text={"Stop"}></Buttons>
                        <Buttons text={"Start"}></Buttons>
                    </div>



                </search>
            </main>
        </>
    )
}

export default Start