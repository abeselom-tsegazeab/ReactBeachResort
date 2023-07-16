import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Button from '../components/StyledHero'
const Home = () => {
  return (
    <>
      <Hero >

        <Banner title={'luxurious rooms'} subtitle={'deluxe roooms starting at $299'}>
          <Link to='/rooms' className='btn-primary'>our rooms</Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
      {/* <Button>button</Button> */}
    </>
  )
}
Hero.defaultProps = {
  hero: 'defaultHero',
}

export default Home