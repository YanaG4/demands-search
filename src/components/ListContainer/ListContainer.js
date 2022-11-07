import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, fetchAllProducts, getProductsStatus } from '../../features/products/productsSlice'

import ProductContainer from './ProductContainer'
import LoadingCircle from '../Loading/LoadingCircle'

export default function ListContainer() {
    const dispatch = useDispatch()
    const products = useSelector(getAllProducts)
    const status = useSelector(getProductsStatus)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    let renderProducts = ""
    renderProducts = status === "success" ?
        (
            products.map((product, index) =>
                <ProductContainer key={index} data={product} />
            )
        )
        :
        (
            <LoadingCircle />
        )
    return (
        <>
            {renderProducts}
        </>
    )
}
