import React from 'react'
import './Breadcrum.css';
import breadcrum from '../Assets/breadcrum_arrow.png'




const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={breadcrum} alt="" /> SHOP <img src={breadcrum} alt="" />{product.category} <img src={breadcrum} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum;
