import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
export const NewCollections = () => {
  const [new_Collection,setNew_collection]=useState([])

  useEffect(()=>{
  fetch('http://localhost:4000/newcollections').then((res)=>res.json()).then(data =>  setNew_collection( data) )
  },[])

  return (
    <div className='new-collections'>
         <h1>NEW COLLECTIONS</h1>
         <hr></hr>
         <div className="collections">
          {new_Collection.map((item,i)=><Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)}
         </div>
    </div>
  )
}
export default NewCollections