/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Profile from '../components/common/Profile'
import HomePageDetails from "../components/common/HomePageDetails"
const Home = () => {
    return (
        <>
            <HomePageDetails/>
            <div style={{margin:"15px 2rem"}} className="profile">
                <Profile/>
            </div>
        </>
    )
}

export default Home
