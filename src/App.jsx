import React from 'react'
import Navbar from './components/navbar'
import ImgSlider from './components/ImgSlider'
import Slowgun from './components/Slowgun'
import Hero from './components/Hero'
import Exclusive from './components/Exclusive'
import Items from './components/Items'
import Video from './components/video'
import Footer from './components/Footer'
import SmoothScroll from './components/Locomotive'

const App = () => {
  return (
    
      <SmoothScroll>
      <Navbar/>
      <ImgSlider/>
      <Slowgun/>
      <Hero/>
      <Exclusive/>
      <Items/>
      <Video/>
      <Footer/> 
      </SmoothScroll>

  )
}

export default App