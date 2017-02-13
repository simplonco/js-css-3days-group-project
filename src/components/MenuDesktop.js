import React, {PropTypes} from 'react';
import { Menu } from 'semantic-ui-react'

const MenuDesktop = (props) => {
  return (
    <div className="ui large top fixed hidden menu">
        <div className="ui container">
            <a className="active item" href="#">Accueil</a>
            <a className="item" href="#carte">Carte</a>
            <a className="item" href="#contact">Contact</a>
            <div className="right menu">
                <div className="item">
                    <a className="ui button">Panier</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuDesktop
