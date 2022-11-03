import React from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Option from './Option';

export default function ProductDetails() {
    return (
        <AccordionDetails>
            <h3>
                Product Details
            </h3>
            <Typography>Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow authors to update their documents themselves.</Typography>
            <RadioGroup
                defaultValue="option1"
                name="radio-buttons-group"
            >
                <Option value={'Option 1'} />
                <Option value={'Option 2'} />
            </RadioGroup>
        </AccordionDetails>
    )
}
