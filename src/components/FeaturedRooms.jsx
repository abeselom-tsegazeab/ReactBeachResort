import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRooms extends Component {
  static contextType = RoomContext
  render() {
    let {loading,featuredRooms:rooms} = this.context
    rooms = rooms.map(room =>{
      return <Room key={room.id} room={room}/>
    })
    if(loading === false){

      return (
        
        <section className="featured-rooms">
        <Title title={'featuredRooms'}/>
        <div className="featured-rooms-center">
          {rooms}
        </div>
      </section>
    )
  }else{
    return(
      <section className="featured-rooms">
        <Title title={'rooms  data loading...'}/>
        <div className="featured-rooms-center loading">
          <Loading/>
        </div>
      </section>
    )
  }
  }
}
