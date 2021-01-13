import React from 'react';
import m from "./MyPosts.module.css"
import Post from './Post/Post';

const MyPosts = () => {
    return(
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>New Post</button>
        </div>
        <div className={m.posts}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    )
}

export default MyPosts;