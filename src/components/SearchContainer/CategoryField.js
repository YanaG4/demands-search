import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material'
import { setCategories, getProductsStatus, searchProducts } from '../../features/products/productsSlice';

import './CategoryField.css'

// const TAGS = [
//     { SOFTWARE_DEVELOPMENT: 'Software Development' },
//     { DAILY_BUSINESS: 'Daily Business' },
//     { GRAPHIC_EDITORS: 'Graphic Editors' },
//     { TEXT_EDITORS: 'Text Editors' },
//     { MANAGEMENT_TOOLS: 'Management Tools' },
// ]



export default function CategoryField() {
    const dispatch = useDispatch()
    const status = useSelector(getProductsStatus)
    const categoryCheckedHandling = (name, checked) => {
        console.log(checked);
        if (status === "success")
            dispatch(setCategories({ name, checked }))
        dispatch(searchProducts())
    }

    return (
        <div className='flex-container'>
            <FormControlLabel control={<Checkbox defaultChecked={false} name='Software Development' onChange={(e) => categoryCheckedHandling(e.target.name, e.target.checked)} />} label='Software Development' />
            <FormControlLabel control={<Checkbox defaultChecked={false} name='Daily Business' onChange={(e) => categoryCheckedHandling(e.target.name, e.target.checked)} />} label='Daily Business' />
            <FormControlLabel control={<Checkbox defaultChecked={false} name='Graphic Editors' onChange={(e) => categoryCheckedHandling(e.target.name, e.target.checked)} />} label='Graphic Editors' />
            <FormControlLabel control={<Checkbox />} label='Text Editors' />
            <FormControlLabel control={<Checkbox />} label='Management Tools' />
        </div>
    )
}
