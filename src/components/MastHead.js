import React, {PropTypes} from 'react'
import PanierButton from './PanierButton'

const MastHead = (props) => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="slider"></div>
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <a className="toc item">
            <i className="sidebar icon"></i>
          </a>
          <a className="active item" href="#">Accueil</a>
          <a className="item" href="#carte">Carte</a>
          <a className="item" href="#contact">Contact</a>
          <div className="right item">
            <PanierButton { ...props } />
          </div>
        </div>
      </div>

      <div className="ui text container">
        <h1 className="ui inverted header resto-title"></h1>
        <h2 className="resto-baseline"></h2>
      </div>

    </div>
  )
}

export default MastHead
