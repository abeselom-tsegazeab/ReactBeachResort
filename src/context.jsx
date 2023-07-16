import { func } from 'prop-types';
import React, { Component,createContext } from 'react'
import items from './data'
import Client from './Contentful'
const RoomContext = createContext();

export default class RoomProvider extends Component {
  state ={
   rooms: [],
   sortedRooms:[],
   featuredRooms:[],
   loading:true,
   type:'all',
   capacity:1,
   price:0,
   minPrice:0,
   maxPrice:0,
   minSize:0,
   maxSize:0,
   pets:false,
   breakfast:false
  }
// getData

getData = async () =>{
  try{
    let response = await Client.getEntries({
      content_type:'beachResortRoom'
    })
    let rooms = this.formatData(response.items)
  let featuredRooms = rooms.filter(room => room.featured === true)
  let maxPrice = Math.max(...rooms.map(item => item.price))
  let minPrice = Math.min(...rooms.map(item => item.price))
  let minSize = Math.min(...rooms.map(item => item.size))
  let maxSize = Math.max(...rooms.map(item => item.size))

  this.setState({ 
    rooms,
    featuredRooms,
    sortedRooms:rooms,
    loading:false,
    maxPrice,
    maxSize,
    minPrice,
    minSize,
  })


  }catch(e){
    console.log(e)
  }
}


componentDidMount(){
  this.getData()
  
}

getRoom=(slug)=>{
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find(room => room.slug === slug)
  return room;
}

handleChange = (e)=>{
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = e.target.name;
  this.setState(
    {
      [name]: value
    },
    this.filterRooms
  );
};

filterRooms = () =>{
  let {
    rooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = this.state;

  // all  the rooms
  let tempRooms = [...rooms]

 // transform values
   capacity = parseInt(capacity)

   price = parseInt(price)

  //  filter by size
  tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

  // filter by breakfast
  if(breakfast){
    tempRooms = tempRooms.filter(room => room.breakfast === true)
  }


  // filter by pets
  if(pets){
    tempRooms = tempRooms.filter(room => room.pets === true)
  }


   // filter by price 
   tempRooms = tempRooms.filter(room => room.price >= price)

   // filter by capacity
   if(capacity !=1){
    tempRooms = tempRooms.filter(room => room.capacity >= capacity);
   }

   // filter by type
  if(type != 'all'){
    tempRooms = tempRooms.filter(room => room.type === type)
  }
  this.setState({
    sortedRooms: tempRooms,

  })

}

formatData(items) {
  let tempItems = items.map(item =>{
    let id = item.sys.id
    let images = item.fields.images.map(image =>image.fields.file.url)
    let room = {...item.fields,images,id}
    return room
  })
  return tempItems
}


  render() {
    return <RoomContext.Provider value={{
      ...this.state ,
      getRoom:this.getRoom,
      handleChange:this.handleChange
       }}>
        {this.props.children}
    </RoomContext.Provider>
  }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){ 
    return <RoomConsumer>
      {value => <Component {...props} context={value}/>}
    </RoomConsumer>
  }
}

export{RoomProvider,RoomConsumer,RoomContext}