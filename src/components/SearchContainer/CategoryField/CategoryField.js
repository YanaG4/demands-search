import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material'
import { setCategories, getProductsStatus, searchProducts } from '../../../features/products/productsSlice';
import { categories } from '../../../constants/categories'

import './CategoryField.css'

export default function CategoryField() {
    const dispatch = useDispatch()
    const status = useSelector(getProductsStatus)
    const categoryCheckedHandling = (name, checked) => {
        if (status === "success")
            dispatch(setCategories({ name, checked }))
        dispatch(searchProducts())
    }
    const renderCategories = (
        categories.map(category => (
            <FormControlLabel control={
                <Checkbox
                    defaultChecked={false}
                    name={category}
                    onChange={(e) => categoryCheckedHandling(e.target.name, e.target.checked)}
                />}
                label={category}
                key={category} />
        ))
    )
    return (
        <div className='flex-container'>
            {renderCategories}
        </div>
    )
}
