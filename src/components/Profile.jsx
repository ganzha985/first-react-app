import React from 'react';
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
      <div>
        posts
        <div>
          new post
        </div>
        <div className={m.posts}>
          <div className={m.item}>
            post 1
          </div>
          <div className={m.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile;