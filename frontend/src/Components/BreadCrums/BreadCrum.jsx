import React from 'react'
import arrow_icon from '../Assests/breadcrum_arrow.png'
import './BreadCrum.css'
 const BreadCrum = (props) => {
    const {product} = props
 
  return (
    <div className='breadcrum'>
        HOME<img src={arrow_icon} alt=''/>SHOP<img src={arrow_icon}alt=''/>
        {product.category} <img src={arrow_icon} alt=''/>{product.name}
    </div>
  )
}
export default BreadCrum
