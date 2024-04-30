import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
      <p className='appDownload-text'>For Better Experience Download<br/>Tomato App</p>
      <div className='appDownload-icons'>
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
