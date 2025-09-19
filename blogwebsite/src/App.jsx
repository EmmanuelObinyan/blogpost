import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Author from './pages/Author'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Blogpost from './pages/BlogPost'
import Blogs from './pages/Blogs'
import './App.css'
import Privacy from './pages/Privacy'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path='/privacy' element={<Privacy/>}/>
           <Route path='/author' element={<Author/>}/>
           <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/blogpost' element={<Blogpost/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/About' element={<About/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
