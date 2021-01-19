import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Stories from './components/Stories/Stories'
import Create from './components/Create/Create'
import Post from './components/Posts/Posts'
import SliderBar from './components/SliderBar/SliderBar'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stories />
        <Create />
        <Post />
        <SliderBar />
      </div>
    </div>
  )
}

export default App
