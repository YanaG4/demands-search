import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, fetchAllProducts, getProductsStatus } from '../../../features/products/productsSlice'

import ProductContainer from '../ProductContainer/ProductContainer'
import LoadingCircle from '../../Loading/LoadingCircle'

import './ListContainer.css'

export default function ListContainer() {
    const dispatch = useDispatch()
    const products = useSelector(getAllProducts)
    const status = useSelector(getProductsStatus)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    let renderProducts = ""
    function renderSettings() {
        if (status !== "success")
            return (<LoadingCircle />)
        if (!products.length)
            return (<h3 className='warning-message'>No Products found...</h3>)
        return (
            products.map((product) =>
                <ProductContainer key={product.id} data={product} />
            )
        )
    }
    renderProducts = renderSettings()
    return (
        <>
            {renderProducts}
        </>
    )
}
