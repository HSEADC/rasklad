import React from 'react';
import './M_SearchBox.scss'
import classnames from 'classnames'

export default class M_SearchBox extends React.Component {
  render() {
    return (
        <div class="M_SearchBox">
        <input
          class="A_Search"
          type="text"
          placeholder="поиск"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'поиск'"
        />
        <div class="Q_SearchIcon"></div>
      </div>
    )
  }
}