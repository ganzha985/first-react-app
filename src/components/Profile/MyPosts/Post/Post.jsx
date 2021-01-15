import React from 'react';
import m from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={m.item}>
      <img src="https://www.blast.hk/attachments/68540/" />
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  )
}

export default Post;