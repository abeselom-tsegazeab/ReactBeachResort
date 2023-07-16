import React,{useContext} from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'
// get all unique values

const getUniqueValues = (items, value) =>{
  return [...new Set(items.map(item =>item[value]))]
}

const RoomFilter = ({rooms}) => {
  const context = useContext(RoomContext)
  
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
// get unique types 
  let types = getUniqueValues(rooms,'type');
  
// add all
types = ['all',...types]

let people = getUniqueValues(rooms,'capacity')
people = people.map((item,index)=>{
  return <option key={index} value={item}>{item}</option>
})
  return ( 
     <section className="filter-container">
      <Title title={'search rooms'}/>
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
         {/* select one */}
          <select 
          name="type" 
          id="type" 
          value={type} 
          className='form-control' 
          onChange={handleChange}
          >
            {
              types.map((item,index) => <option value={item} key={index}>{item}</option>)
            }
                    
          </select> 
        </div>

        <div className="form-group">

            {/* guests */}
            <label htmlFor="capacity">guests</label>
            <select 
          name="capacity" 
          id="capacity" 
          value={capacity } 
          className='form-control' 
          onChange={handleChange}
          >
            {
              people
            }
                    
          </select> 
        </div>

          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">room price upto ${price}</label>
            <input type="range" className='form-control' name='price' min={minPrice} max={maxPrice}  id='price' value={price} onChange={handleChange} />
          </div>

          {/* room size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input type="number" name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
              <input type="number" name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
            </div>
          </div>

          <div className="form-group">
            <div className="single-extra">
              <input type="checkbox" name="breakfast" id='breakfast' checked={breakfast} onChange={handleChange}/>
              <label htmlFor="breakfast">breakfast</label>
            </div>


            <div className="single-extra">
              <input type="checkbox" name="pets" id='pets' checked={pets} onChange={handleChange}/>
              <label htmlFor="pets">pets</label>
            </div>

          </div>


      </form>
     </section>
  )
}

export default RoomFilter