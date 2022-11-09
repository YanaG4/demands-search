import React from 'react'
import Accordion from '@mui/material/Accordion';

import ProductShortInfo from '../ProductShortInfo/ProductShortInfo';
import ProductDetails from '../ProductDetails/ProductDetails';

import './ProductContainer.css'

export default function ProductContainer(props) {
  const { data } = props

  return (
    <div className='container-wrapper product-container'>
      <Accordion >
        <ProductShortInfo data={data} />
        <ProductDetails data={data} />
      </Accordion>
    </div>
  )
}
