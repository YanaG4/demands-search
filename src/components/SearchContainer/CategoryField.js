import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material'

import './CategoryField.css'

// const TAGS = [
//     { SOFTWARE_DEVELOPMENT: 'Software Development' },
//     { DAILY_BUSINESS: 'Daily Business' },
//     { GRAPHIC_EDITORS: 'Graphic Editors' },
//     { TEXT_EDITORS: 'Text Editors' },
//     { MANAGEMENT_TOOLS: 'Management Tools' },
// ]

export default function CategoryField() {
    return (
        <div className='flex-container'>
            <FormControlLabel control={<Checkbox defaultChecked />} label='Software Development' />
            <FormControlLabel control={<Checkbox />} label='Daily Business' />
            <FormControlLabel control={<Checkbox />} label='Graphic Editors' />
            <FormControlLabel control={<Checkbox />} label='Text Editors' />
            <FormControlLabel control={<Checkbox />} label='Management Tools' />
        </div>
    )
}
