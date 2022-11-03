import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import TagsContainer from './TagsContainer';

import ProductDetails from './ProductDetails';

import './ProductContainer.css'

export default function ProductContainer() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  const tags = ['PDF', 'Change', 'Create']
  return (
    <div className='container-wrapper product-container'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ width: '100%' }}>
            <Typography >
              Foxit Software PhantomPDF Standard
            </Typography>
            <TagsContainer
              tagNames={tags} />
          </div>
          <Typography sx={{ color: 'text.secondary', whiteSpace: 'nowrap', alignSelf: 'center' }}>Daily Business</Typography>
        </AccordionSummary>
        <ProductDetails />
      </Accordion>
    </div>
  )
}
