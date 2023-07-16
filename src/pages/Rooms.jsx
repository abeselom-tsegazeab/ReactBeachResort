import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContainer'
const Room = () => {
  return (
    <div>
      <Hero>
        <Banner title={'our rooms'}>
          <Link to='/home' className="btn-primary">
            back to home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer/>
    </div>
  )
}

export default Room