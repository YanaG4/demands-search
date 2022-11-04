import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import TagsContainer from './TagsContainer';

import './ProductShortInfo.css'

export default function ProductShortInfo() {
    const tags = ['PDF', 'Change', 'Create']
    return (
        <AccordionSummary
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div style={{ width: '100%' }}>
                <h2 >
                    Foxit Software PhantomPDF Standard
                </h2>
                <TagsContainer
                    tagNames={tags} />
            </div>
            <p className='product-info-category' style={{ color: 'text.secondary', whiteSpace: 'nowrap', alignSelf: 'center' }}>Daily Business</p>
        </AccordionSummary>
    )
}
