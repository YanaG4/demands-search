import React from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Option({ value }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel value={value} control={<Radio />} sx={{ whiteSpace: 'nowrap' }} label={value} />
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </Typography>
        </div>
    )
}
