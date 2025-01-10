import React from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Buttons';
import "./Css/StartPage.Css"
import SideBar from '../../components/SideBar';

const Start = ({ chronometer }) => {

    const path = useNavigate();

    const GoToHome = () => {
        path("/")
    }

    return (
        <>
            <Buttons onClick={GoToHome} text={"Go Back"}></Buttons>
            <br />
            {/* <SideBar></SideBar> */}




            <main className='mainSection'>


                <div className='chronometerZone'>
                    <h2> 5:23</h2>
                </div>

                <div className='buttonsZone'>
                    <Buttons text={"Stop"}></Buttons>
                    <Buttons text={"Start"}></Buttons>
                </div>



            </main>
        </>
    )
}

export default Start