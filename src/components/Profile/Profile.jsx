import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import m from "./Profile.module.css"

const Profile = () => {
    return(
      <div className={m.content}>
      <div>
        <img src="https://bureau.ru/var/files/img1532613761"/>
      </div>
      <div>
        av desc
      </div>
      <MyPosts/>
    </div>
    )
}

export default Profile;