import React from 'react';
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <input
    className='SearchBar'
    type='search'
    placeholder={props.placeholder}
    onChange={props.onSearchChange}
  />
  )
}
