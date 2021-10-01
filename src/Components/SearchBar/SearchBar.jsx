import React from 'react';
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <input
    className='searchBar'
    type='search'
    placeholder={props.placeholder}
    onChange={props.fctChange}
  />
  )
}
