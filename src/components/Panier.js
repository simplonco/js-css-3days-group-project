import React, {PropTypes} from 'react';
import { Header, Modal } from 'semantic-ui-react'
import ShoppingCardHeader from './ShoppingCardHeader'

class Panier extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (
      <Modal open={this.props.modal.opened} onClose={ this.props.closeModal }>
        <Modal.Header>Panier</Modal.Header>
        <Modal.Content>
          <div className="ui segment">
            <table className="panier-container top attached ui basic table">
              <ShoppingCardHeader { ...this.props }/>
              <tbody>
                { this.props.selectedItems.map( item => {
                  console.log('item : ', item);
                  return <tr key={item.id} >
                    <td><i onClick={ (e) => { this.props.removeFromShoppingCard(item.id); } } className="remove circle link icon big"></i></td>
                    <td>{ item.name }</td>
                    <td>{ item.price }</td>
                    <td>{ item.selected }</td>
                    <td>{ `${item.selected * parseFloat(item.price)} €` }</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
          <div className="ui segment total">
            <h3>TOTAL : { this.props.totalPrice } €</h3>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Panier;
