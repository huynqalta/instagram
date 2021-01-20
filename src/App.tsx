import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Stories from './components/Stories/Stories'
import Create from './components/Create/Create'
import Post from './components/Posts/Posts'
import SliderBar from './components/SliderBar/SliderBar'
import Route from './components/router/Router'
import Profile from './components/Profile/Profile'
const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/" >
        <div className="container">
          <Stories />
          <Create />
          <Post />
          <SliderBar />
        </div>
      </Route>
      <Route path="/profile">
        <div className="container">
          <Profile />
        </div>
      </Route>
    </div>
  )
}

export default App
