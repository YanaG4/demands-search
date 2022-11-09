import React, { useState } from 'react';
import watch from 'redux-watch'
import store from '../../../app/store'
import './AlertWrapper.css'
import { ProductSuccessfullyChosenAlert, InternalErrorAlert } from '../CustomAlert/CustomAlert'

export default function AlertWrapper() {
    const [chosenProduct, setChosenProduct] = useState('')
    const [status, setStatus] = useState('')
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    let watchChosenProduct = watch(store.getState, 'products.chosenProduct')
    store.subscribe(watchChosenProduct((newVal) => {
        setChosenProduct(newVal)
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 6000);

    }))

    let watchStatus = watch(store.getState, 'products.status')
    store.subscribe(watchStatus((newVal) => {
        setStatus(newVal)
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 6000);

    }))
    return (
        <div className='alert-wrapper'>

            {chosenProduct && isAlertVisible && (
                <ProductSuccessfullyChosenAlert chosenProduct={chosenProduct} />
            )}
            {status === 'error' && isAlertVisible && (
                <InternalErrorAlert />
            )}

        </div>
    );
}