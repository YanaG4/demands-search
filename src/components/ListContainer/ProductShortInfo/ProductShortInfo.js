import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import Tag from '../Tag/Tag';

import './ProductShortInfo.css'

export default function ProductShortInfo(props) {
    const { data } = props
    let renderTags = ''
    function tagsProcessing() {
        if (!data.tags?.length)
            return []
        if (data.tags.length === 1)
            return data.tags[0].split(',')
        return data.tags
    }
    const tags = tagsProcessing()
    renderTags = tags.length > 0 ?
        (
            <div className='tags-container'>
                {tags.map(tag =>
                    <Tag
                        key={tag} tagName={tag} />
                )}
            </div>
        )
        :
        (<></>)

    return (
        <AccordionSummary
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div style={{ width: '100%' }}>
                <h2 >
                    {data.productName}
                </h2>
                <>
                    {renderTags}
                </>
            </div>
            <p className='product-info-category' style={{ color: 'text.secondary', whiteSpace: 'nowrap', alignSelf: 'center' }}>{data.category}</p>
        </AccordionSummary>
    )
}
