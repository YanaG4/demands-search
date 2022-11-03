import React from 'react'
import './Tag.css'

export default function Tag({ tagName }) {
    console.log(tagName);
    return (
        <div className='tag'>
            {tagName}
            <div className='tag-background'></div>
        </div>
    )
}
