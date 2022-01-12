import React from "react";

import './search-box.styles.css';

// this is a sample functional component
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='Search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)