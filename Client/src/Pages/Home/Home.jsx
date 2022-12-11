import React from 'react'
import PostSide from '../../Components/Postside/PostSide'
import ProfileSide from '../../Components/profileside/ProfileSide'
import RightSide from '../../Components/Rightside/RightSide'
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
    <ProfileSide/>
    <PostSide/>
    <RightSide/>
    </div>
  )
}

export default Home