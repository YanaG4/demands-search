import React from 'react'
import SearchField from '../SearchField/SearchField';
import CategoryField from '../CategoryField/CategoryField';

import './SearchContainer.css'

export default function SearchContainer() {
    return (
        <div className='container-wrapper search-container'>
            <SearchField />
            <CategoryField />
        </div>
    )
}
