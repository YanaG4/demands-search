import React from 'react'
import Accordion from '@mui/material/Accordion';

import ProductShortInfo from '../ProductShortInfo/ProductShortInfo';
import ProductDetails from '../ProductDetails/ProductDetails';

import './ProductContainer.css'

export default function ProductContainer(props) {
  const { data } = props
  const [expanded, setExpanded] = React.useState(false);
  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className='container-wrapper product-container'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ProductShortInfo data={data} />
        <ProductDetails data={data} />
      </Accordion>
    </div>
  )
}
