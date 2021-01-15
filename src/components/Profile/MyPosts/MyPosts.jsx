import React from 'react';
import m from "./MyPosts.module.css"
import Post from './Post/Post';

let postData = [
  { id: 1, message: 'first post' , likesCount: 12},
  { id: 2, message: 'second post' , likesCount: 12},
  { id: 3, message: 'third post' , likesCount: 12},
  { id: 4, message: 'hihihihi' , likesCount: 12},
]

const MyPosts = () => {
  return (
    <div className={m.posts_block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>New Post</button>
        </div>
      </div>
      <div className={m.posts}>
        <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
        <Post id={postData[2].id} message={postData[2].message} likesCount={postData[2].likesCount}/>

      </div>
    </div>
  )
}

export default MyPosts;