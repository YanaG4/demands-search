import React, { useState } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';
import RadioGroup from '@mui/material/RadioGroup';
import Divider from '@mui/material/Divider';

import Option from '../Option/Option';
import ProductDescription from '../ProductDescription/ProductDescription';

import './ProductDetails.css'
import '../../../styles/Button/Button.css'
import { containedButtonStyle, outlinedButtonStyle } from '../../../styles/Button/Button';

export default function ProductDetails(props) {
    const [checked, setChecked] = useState('')
    const { data } = props
    let renderOptions = ''
    let renderDescription = ''

    renderOptions = !data.options?.length ?
        (<></>)
        :
        (
            <RadioGroup
                defaultValue={data.options[0].name}
                name="radio-buttons-group"
                sx={{ mt: '16px' }}
            >
                {data.options.map((option) => (
                    <Option key={option.name} value={option} />
                ))}
            </RadioGroup>
        )
    renderDescription = data.description.map(descriptionLine => (
        <ProductDescription key={descriptionLine} description={descriptionLine} />
    ))
    return (
        <AccordionDetails>
            <Divider />
            <h3>
                Product Details
            </h3>
            <div className='product-description'>{renderDescription}</div>
            <>
                {renderOptions}
            </>
            <div className='button-group'>
                <button className={containedButtonStyle}>Choose</button>
                <a className={outlinedButtonStyle} href={data.manufacturerUrl} target="_blank" rel="noopener noreferrer">Go to Manufacturer</a>
            </div>
        </AccordionDetails>
    )
}
