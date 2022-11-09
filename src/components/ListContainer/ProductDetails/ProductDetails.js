import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import AccordionDetails from '@mui/material/AccordionDetails';
import RadioGroup from '@mui/material/RadioGroup';
import Divider from '@mui/material/Divider';

import { choseProduct } from '../../../features/products/productsSlice';
import Option from '../Option/Option';
import ProductDescription from '../ProductDescription/ProductDescription';

import './ProductDetails.css'
import '../../../styles/Button/Button.css'
import { containedButtonStyle, outlinedButtonStyle } from '../../../styles/Button/Button';

export default function ProductDetails(props) {
    const dispatch = useDispatch()
    const { data } = props
    let renderOptions = ''
    let renderDescription = ''
    let defaultOption = ''
    defaultOption = data.options[0]?.name
    const [option, setOption] = useState(defaultOption || '')

    function handleSumbitProduct() {
        const chosenProduct = {
            productName: data.productName,
            option,
            id: data.id
        }
        dispatch(choseProduct(chosenProduct))
    }

    renderOptions = !data.options?.length ?
        (<></>)
        :
        (
            <RadioGroup
                onChange={(e) => setOption(e.target.value)}
                defaultValue={defaultOption || ''}
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
                <button className={containedButtonStyle} onClick={handleSumbitProduct}>Choose</button>
                <a className={outlinedButtonStyle} href={data.manufacturerUrl} target="_blank" rel="noopener noreferrer">Go to Manufacturer</a>
            </div>
        </AccordionDetails>
    )
}
