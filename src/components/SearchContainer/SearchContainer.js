import React from 'react'
import SearchField from './SearchField';
import CategoryField from './CategoryField';
import './SearchContainer.css'

export default function SearchContainer() {
    return (
        <div className='container-wrapper search-container'>
            <SearchField />
            <CategoryField />
        </div>
    )
}
