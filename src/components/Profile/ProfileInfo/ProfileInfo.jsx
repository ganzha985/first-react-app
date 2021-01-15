import React from 'react';
import m from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={m.image} src="https://bureau.ru/var/files/img1532613761" />
      </div>
      <div className={m.description}>
        av description
        </div>
    </div>
  )
}

export default ProfileInfo;