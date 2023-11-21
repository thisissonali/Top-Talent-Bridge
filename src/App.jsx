import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import MainBody from './components/MainBody'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'

function App() {

  return (
    <div className='main-app'>
      <Header />
      <SubHeader />
      <MainBody />
      <SuccessStories />
      <Footer />
    </div>
  )
}

export default App
