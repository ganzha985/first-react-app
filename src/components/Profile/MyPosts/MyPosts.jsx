import React from 'react';
import m from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = (props) => {

  let postElements = props.postData.map((post) =>{ return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>})

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
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;