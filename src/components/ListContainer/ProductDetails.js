import React, { useState } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';
import RadioGroup from '@mui/material/RadioGroup';
import Divider from '@mui/material/Divider';

import { ContainedButton, OutlinedButton } from '../Button/Button';
import Option from './Option';

import './ProductDetails.css'

export default function ProductDetails(props) {
    const [checked, setChecked] = useState('')
    const { data } = props
    let renderOptions = ''
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

    return (
        <AccordionDetails>
            <Divider />
            <h3>
                Product Details
            </h3>
            <p className='product-description'>{data.description}</p>
            <>
                {renderOptions}
            </>
            <div className='button-group'>
                <ContainedButton text='Choose' />
                <a href={data.manufacturerUrl} target="_blank"><OutlinedButton text='Go to Manufacturer' ></OutlinedButton></a>
            </div>
        </AccordionDetails>
    )
}
