import React from 'react'
import SearchField from './SearchField';
import TagsField from './TagsField';
import './SearchContainer.css'

export default function SearchContainer() {
    return (
        <div className='container-wrapper search-container'>
            <SearchField />
            <TagsField />
        </div>
    )
}
