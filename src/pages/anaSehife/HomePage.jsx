import React, { Component } from 'react'
import './homepage.css'
import videobg from './video/1851190-hd_1920_1080_25fps.mp4'
export class HomePage extends Component {
  render() {
    return (
      <div className='text-center'>
        <video src={videobg} autoPlay loop muted></video>
      </div>
    )
  }
}

export default HomePage