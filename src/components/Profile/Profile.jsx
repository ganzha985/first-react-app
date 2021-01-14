import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import m from "./Profile.module.css"

const Profile = () => {
    return(
      <div>
        <div>
          <img  className={m.image} src="https://bureau.ru/var/files/img1532613761"/>
        </div>
        <div>
          av description
        </div>
        <MyPosts/>
      </div>
    )
}

export default Profile;