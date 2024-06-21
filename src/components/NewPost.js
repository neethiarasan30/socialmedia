import React from 'react'

export const NewPost = ({postTitle,setPostTitle,postBody,setPostBody,handleSubmit}) => {
  return (
    <main className='NewPost'>
    <h2>New Post</h2>

    <form className='newPostForm' onSubmit={handleSubmit}>
        
        <label htmlFor='posttitle'>Post Title</label>
        <input
            id='posttitle'
            type='text'
            required
            value={postTitle}
            onChange={(e) => {setPostTitle(e.target.value)}}
        />  
        <label htmlFor='postbody'>Post Body</label>
        <textarea
            id='postbody'
            type='text'
            required
            value={postBody}
            onChange={(e) => {setPostBody(e.target.value)}}
        />  

        <button type="submit">Submit</button>
    </form>
    </main>
  )
}
