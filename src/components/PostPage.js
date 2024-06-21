import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PostPage = ({posts,handleDelete}) => {
    
    let {id} = useParams()
  
    let post = posts.find((post) => (post.id).toString() === id)
    return (
   <main className='PostPage'>

    <article className='post'>
        {post && 
        
            <>
                <h2>{post.title}</h2>
                <p className='postDate'>{post.datetime}</p>
                <p className='postBody'>{post.body}</p>
                <button className='deleteButton' onClick={()=> {handleDelete(post.id)}}>Delete</button>
            </>

        }
        {!post && 
        
            <>
                <h2>Post Not Found</h2>
                <p>Well That's Disappointing</p>
                <p><Link to='/'>Vist Our Homepage</Link></p>
            </>

        }
    </article>
   </main>
  )
}
