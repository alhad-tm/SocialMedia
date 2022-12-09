import React from 'react'
import FollowersCard from '../Followerscard/FollowersCard'
import InfoCard from '../Infocard/InfoCard'
import LogoSearch from '../Logosearch/LogoSearch'
import "./ProfileLeft.css"

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft