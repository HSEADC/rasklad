import React from 'react';
import './M_SearchBar.scss'
import classnames from 'classnames'

import A_Input from '../A_Input/A_Input.jsx';
import A_SearchButton from '../A_SearchButton/A_SearchButton.jsx';

export default class M_SearchBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      searchInputValue,
      handleSearchInput,
      handleSearchSubmit,
      onChange
    } = this.props

    return (
        <div className='M_SearchBar'>
          <A_Input 
            onChange={onChange}
            value={searchInputValue}
            placeholder="поиск"
            handleInput={handleSearchInput}
            handleSubmit={handleSearchSubmit}/>
            
          <A_SearchButton
            handleClick={handleSearchSubmit}
          />
        </div>
    )
  }
}