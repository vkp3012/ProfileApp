/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Meta from "../components/common/Meta"
import Profile from '../components/common/Profile'
import HomePageDetails from "../components/common/HomePageDetails"
const Home = () => {
    return (
        <>
            <Meta title={"Vivek Patel"} />
            <HomePageDetails/>
            <div style={{margin:"15px 2rem"}} className="profile">
                <Profile/>
            </div>
        </>
    )
}

export default Home
