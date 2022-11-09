import React from 'react';
import Alert from '@mui/material/Alert';

export const ProductSuccessfullyChosen = (props) => {
    const { chosenProduct } = props
    console.log(chosenProduct);
    return (
        <Alert severity="success">You successfully chose {chosenProduct?.productName}
            {chosenProduct?.option ? ` with option: ${chosenProduct?.option}` : ''}</Alert>
    )
}
