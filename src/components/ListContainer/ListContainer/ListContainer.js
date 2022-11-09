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
    function getRenderComponent() {
        if (status !== "success") //There would be different statuses, but we don't have backend in this demo. So I used this opportunity to show the prorgess indicator in any cases axcept success
            return (<LoadingCircle />)
        if (!products.length)
            return (<h3 className='warning-message'>No Products found...</h3>)
        return (
            products.map((product) =>
                <ProductContainer key={product.id} data={product} />
            )
        )
    }
    renderProducts = getRenderComponent()
    return (
        <>
            {renderProducts}
        </>
    )
}
