import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title={'404'} subtitle={'page not found'}>
          <Link to='/home' className='btn-primary'>Back to Home</Link>
        </Banner>
      </Hero>
    </div>
  )
}

export default Error