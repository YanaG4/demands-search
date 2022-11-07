import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, fetchAllProducts } from '../../features/products/productsSlice'

import ProductContainer from './ProductContainer'

export default function ListContainer() {
    const dispatch = useDispatch()
    const products = useSelector(getAllProducts)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])
    return (
        <ProductContainer />
    )
}
