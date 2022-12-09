import React from 'react'
import FollowersCard from '../Followerscard/FollowersCard'
import LogoSearch from '../Logosearch/LogoSearch'
import ProfileCard from '../Profilecard/ProfileCard'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
   <LogoSearch/>
   <ProfileCard/>
   <FollowersCard/>
   </div> 
  )
}

export default ProfileSide