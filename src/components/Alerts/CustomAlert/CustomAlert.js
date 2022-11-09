import React from 'react';
import Alert from '@mui/material/Alert';

export const ProductSuccessfullyChosenAlert = (props) => {
    const { chosenProduct } = props
    return (
        <Alert severity="success">You have successfully chosen {chosenProduct?.productName}
            {chosenProduct?.option ? ` with option: ${chosenProduct?.option}` : ''}</Alert>
    )
}

export const InternalErrorAlert = () => {
    return (
        <Alert severity="error">Internal error. Cannot get data from server.</Alert>
    )
}
