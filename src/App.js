import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home";
import { NewPost } from "./components/NewPost";
import {format, formatDate} from 'date-fns'
import { PostPage } from "./components/PostPage";
import { About } from "./components/About";

function App() {

  let navigate = useNavigate()

  let[posts,setPosts]  = useState(JSON.parse(localStorage.getItem('socialmedia')))

  let[search, setSearch] = useState("")

  let[postTitle, setPostTitle] = useState("")

  let[postBody, setPostBody] = useState("")

  let handleSubmit = (e)=>{

    e.preventDefault()
    let id = posts.length ? posts[posts.length-1].id +1 : 1
    let datetime = format(new Date(), 'MMMM dd, yyyy pp')
    let newpost = {id:id, title:postTitle, datetime:datetime, body:postBody}
    setPosts([...posts,newpost])
    setPostTitle("")
    setPostBody("")
    localStorage.setItem('socialmedia',JSON.stringify([...posts,newpost]))
    navigate('/')
  }


  let handleDelete = (id) => {
      let postList = posts.filter((post) => post.id !== id)
      setPosts(postList)
      localStorage.setItem('socialmedia',JSON.stringify(postList))
      navigate('/')
  }

  useEffect(()=>{
    let filteredInputs = posts.filter((post)=> ((post.title.toLowerCase()).includes(search.toLowerCase()))
    || ((post.body.toLowerCase()).includes(search.toLowerCase()))
  )
  setPosts(filteredInputs)
  },[search])

  return (
    <div className="App">
        <Header heading="Social Media"/>
        <Nav search={search} setSearch={setSearch}/>

        <Routes>
          <Route path='/' element={<Home posts={posts}/>}/>
        
          <Route path='post'>
              <Route index element={<NewPost postTitle={postTitle} setPostTitle={setPostTitle}
                postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit}
              />}/>
              <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
          </Route>
          <Route path='about' element={<About/>}/>
        </Routes>


        <Footer/>
    </div>
  );
}

export default App;
