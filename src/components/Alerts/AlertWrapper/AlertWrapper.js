import React, { useState } from 'react';
import watch from 'redux-watch'
import store from '../../../app/store'
import './AlertWrapper.css'
import { ProductSuccessfullyChosen } from '../CustomAlert/CustomAlert'

export default function AlertWrapper() {
    const [chosenProduct, setChosenProduct] = useState('')
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    let w = watch(store.getState, 'products.chosenProduct')
    store.subscribe(w((newVal) => {
        setChosenProduct(newVal)
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 4000);

    }))
    return (
        <div className='alert-wrapper'>

            {chosenProduct && isAlertVisible && (
                <ProductSuccessfullyChosen chosenProduct={chosenProduct} />
            )}

        </div>
    );
}