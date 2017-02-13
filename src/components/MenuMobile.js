import React, {PropTypes} from 'react';
import { Menu } from 'semantic-ui-react'


const MenuMobile = (props) => {
  return (
    <div className="ui vertical inverted sidebar menu">
      <a className="active item" href="#">Accueil</a>
      <a className="item" href="#carte">Carte</a>
      <a className="item" href="#contact">Contact</a>
      <a className="item">Panier</a>
    </div>
  )
}

export default MenuMobile
