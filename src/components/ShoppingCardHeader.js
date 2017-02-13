import React, {PropTypes} from 'react';

const ShoppingCardHeader = (props) => {
    if(props.totalSelected > 0) {
      return (
        <thead>
          <tr>
            <th></th><th>Plat</th><th>Prix unitaire</th><th>Quantité</th><th>Sous-total</th>
          </tr>
        </thead>
      )
    } else {
      return (<thead><tr><th>No items in shopping card</th></tr></thead>)
    }

}

export default ShoppingCardHeader
