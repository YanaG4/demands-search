import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, fetchAllProducts, getProductsStatus } from '../../../features/products/productsSlice'
import Accordion from '@mui/material/Accordion';

import ProductShortInfo from '../ProductShortInfo/ProductShortInfo';
import ProductDetails from '../ProductDetails/ProductDetails';
import LoadingCircle from '../../Loading/LoadingCircle';

import './ListContainer.css'

export default function ListContainer() {
    const dispatch = useDispatch()
    const products = useSelector(getAllProducts)
    const status = useSelector(getProductsStatus)
    const [expanded, setExpanded] = useState(false);

    const handleChange = (productContainer) => (event, isExpanded) => {
        setExpanded(isExpanded ? productContainer : false);
    };

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
                <div className='container-wrapper product-container' key={product.id}>
                    <Accordion expanded={expanded === product.id} onChange={handleChange(product.id)} >
                        <ProductShortInfo data={product} />
                        <ProductDetails data={product} />
                    </Accordion>
                </div>
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
