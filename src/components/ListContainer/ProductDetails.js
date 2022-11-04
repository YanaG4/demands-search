import React, { useState } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Divider from '@mui/material/Divider';

import { ContainedButton, OutlinedButton } from '../Button/Button';
import Option from './Option';

import './ProductDetails.css'

export default function ProductDetails() {
    const [checked, setChecked] = useState('')

    return (
        <AccordionDetails>
            <Divider />
            <h3>
                Product Details
            </h3>
            <p className='product-description'>Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow authors to update their documents themselves.</p>
            <RadioGroup
                defaultValue="Option 1"
                name="radio-buttons-group"
                sx={{ mt: '16px' }}
            >
                <Option value={'Option 1'} />
                <Option value={'Option 2'} />
            </RadioGroup>
            <div className='button-group'>
                <ContainedButton text='Choose' />
                <OutlinedButton text='Go to Manufacturer' />
            </div>
        </AccordionDetails>
    )
}
