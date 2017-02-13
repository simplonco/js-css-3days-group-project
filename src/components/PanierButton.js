import React from 'react';

class PanierButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = props;

  }

  render() {
    return <a className="ui inverted button panier" onClick={ (e) => { this.props.openModal(); }}>Panier</a>;
  }
}

export default PanierButton;
