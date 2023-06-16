import React from 'react';
import './O_MenuBar.scss'
import classnames from 'classnames'

import A_MenuElement from '../A_MenuElement/A_MenuElement.jsx';
import M_SearchBar from '../M_SearchBar/M_SearchBar.jsx';
import { getSearchData } from '../../airtableData.js';
import A_MenuLogo from '../A_MenuLogo/A_MenuLogo.jsx';

const adressPart = ':8080/'
// const addressPart = '.adc.ac/'
const menu = [
  {
    text: '',
    url: '/index.html'
  },
  {
    text: 'погадать',
    url: '/fortunetellings.html'
  },
  {
    text: 'почитать',
    url: '/articles.html'
  },
  {
    text: 'толкования карт',
    url: '/cards.html'
  },
  {
    text: 'карта дня',
    url: '/cardoftheday.html'
  }
]

export default class O_MenuBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      isSearchButtonDisabled: true,
      teasers: [],
      searchInputValue
    }
  }

  componentDidMount() {
    getSearchData().then((data) => {
      this.setState({
        teasers: data
      })
    })
  }

  // вынести функцию в утилиты
  getPathFromUrl = (url) => {
    return url.split(adressPart)[0]
  }

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url + adressPart + 'search.html?request=' + searchInputValue
    }
  }
  // handleLogoClick = () => {
  //   if(elementsBurger) {
  //     setClass(false);
  // } else {
  //     setClass(true);
  // }
  // }

  render() {
    const { searchInputValue, current, searchBurger, elementsBurger } = this.state
    const url = this.getPathFromUrl(window.location.href)
    const wrapperClasses = classnames({
      'M_MenuElements': true,
      'showing': elementsBurger
    })
    return (
      <div className="O_MenuBar">
        {/* <A_MenuLogo url={menu[0].url}/> */}
        <A_MenuLogo url={url + adressPart}/>
        <div className={wrapperClasses}>
          <A_MenuElement text={menu[1].text} url={menu[1].url} current={current} logo={false} wrapper='W_MenuElement1'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[2].text} url={menu[2].url} current={current} logo={false} wrapper='W_MenuElement2'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[3].text} url={menu[3].url} current={current} logo={false} wrapper='W_MenuElement3'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[4].text} url={menu[4].url} current={current} logo={false} wrapper='W_MenuElement4'/>
        </div>

        <M_SearchBar
          showing={searchBurger}
          searchInputValue={searchInputValue}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    )
  }
}