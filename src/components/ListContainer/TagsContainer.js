import React from 'react'
import Tag from './Tag'
import './TagsContainer.css'

export default function TagsContainer({ tagNames }) {

    const listOfTags = tagNames.map(tagName =>
        <Tag
            key={tagName}
            tagName={tagName} />
    )
    return (
        <div className='tags-container'>
            {listOfTags}
        </div>
    )
}
