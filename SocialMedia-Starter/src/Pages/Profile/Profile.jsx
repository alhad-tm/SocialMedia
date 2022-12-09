import React from 'react'
import PostSide from '../../Components/Postside/PostSide'
import ProfileCard from '../../Components/Profilecard/ProfileCard'
import ProfileLeft from '../../Components/Profileleft/ProfileLeft'
import RightSide from '../../Components/Rightside/RightSide'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile

