import React, { Component } from 'react';

import data from './data.json'
import {ListCollection} from './ListModel'

import MenuMobile from './components/MenuMobile';
import Panier from './components/Panier';
import Pusher from './components/Pusher';


class App extends Component {

  constructor(props) {

    super(props);

    this.collection = new ListCollection(data.carte);

    this.state = {
      items: this.collection.items,
      modal: {
        opened: false
      },
      selectedItems: this.collection.getSelectedItems(),
      totalSelected: this.collection.getTotalSelected(),
      totalPrice: this.collection.getTotalPrice()
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addToShoppingCard = this.addToShoppingCard.bind(this);
    this.removeFromShoppingCard = this.removeFromShoppingCard.bind(this);

  }

  openModal() {
    this.setState( {
      ...this.state, modal: {
        opened: true
      }
    });
  }

  closeModal() {
    this.setState( {
      ...this.state, modal: {
        opened: false
      }
    });
  }

  addToShoppingCard(id) {
    this.setState( {
      ...this.state,
      items: this.collection.addToShoppingCard(id),
      selectedItems: this.collection.getSelectedItems(),
      totalSelected: this.collection.getTotalSelected(),
      totalPrice: this.collection.getTotalPrice()
    });
  }

  removeFromShoppingCard(id) {
    this.setState( {
      ...this.state,
      items: this.collection.removeFromShoppingCard(id),
      selectedItems: this.collection.getSelectedItems(),
      totalSelected: this.collection.getTotalSelected(),
      totalPrice: this.collection.getTotalPrice()
    });
  }

  render() {
    return (
      <div>
        <MenuMobile/>
        <Panier
          closeModal={ this.closeModal }
          removeFromShoppingCard={ this.removeFromShoppingCard }
          selectedItems={ this.state.selectedItems }
          totalSelected={ this.state.totalSelected }
          totalPrice={ this.state.totalPrice }
          modal={ this.state.modal }
          items={this.state.items}/>
        <Pusher
          openModal={ this.openModal }
          addToShoppingCard={ this.addToShoppingCard }
          modal={ this.state.modal }
          items={this.state.items}/>
      </div>
    );
  }
}

export default App;


/*<div className="ui large top fixed hidden menu">
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

<div className="ui modal panier">
  <div className="ui segments">
    <div className="ui segment">
      <h3>Panier</h3>
    </div>
    <div className="ui segment">
      <table className="panier-container top attached ui basic table">
      </table>
    </div>
    <div className="ui segment total">
      <h3>TOTAL : 0 €</h3>
    </div>
  </div>
</div>

<div className="ui vertical inverted sidebar menu">
  <a className="active item" href="#">Accueil</a>
  <a className="item" href="#carte">Carte</a>
  <a className="item" href="#contact">Contact</a>
  <a className="item">Panier</a>
</div>

<div className="pusher">
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
          <a className="ui inverted button panier">Panier</a>
        </div>
      </div>
    </div>

    <div className="ui text container">
      <h1 className="ui inverted header resto-title"></h1>
      <h2 className="resto-baseline"></h2>
    </div>

  </div>

  <div className="ui vertical stripe segment">
    <div className="ui text container">
      <h3 className="ui header">Description</h3>
      <p className="resto-desc"></p>
    </div>
  </div>

  <div id="carte" className="ui vertical stripe segment">
    <div className="ui text container">
      <h3 className="ui header">Carte</h3>
      <div className="ui items courses">
      </div>
    </div>
  </div>

  <div id="contact" className="ui vertical stripe segment">
    <div className="ui text container">
      <h3 className="ui header">Localisation</h3>
      <div className="ui image fluid resto-gmap">
        <iframe src="" frameborder="0"></iframe>
      </div>
    </div>
  </div>

  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="height wide column">
          <h4 className="ui inverted header">Adresse</h4>
          <p><span className="resto-address"></span><br/>
          <span className="resto-codepostal"></span> <span className="resto-ville"></span></p>
        </div>
        <div className="three wide column">
          <div className="ui inverted link list right">
            <a className="item" href="#">Accueil</a>
            <a className="item" href="#carte">Carte</a>
            <a className="item" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>*/
