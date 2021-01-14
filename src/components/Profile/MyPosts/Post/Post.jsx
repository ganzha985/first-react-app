import React from 'react';
import m from "./Post.module.css"

const Post = () => {
    return(
      <div className={m.item}>
        <img  src="https://www.blast.hk/attachments/68540/"/>
        post 2
        <span>like</span>
      </div>
    )
}

export default Post;