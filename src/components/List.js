import React from 'react';

//<h1>{ `coucou ${props.modal.opened}` }</h1>
class List extends React.Component {

  constructor(props) {
    super(props);

    console.log('List this.props : ', this.props)
  }

  render() {
    return (
      <div id="carte" className="ui vertical stripe segment">
        <div className="ui text container">
            <h1>{ `coucou ${this.props.modal.opened}` }</h1>
            <h3 className="ui header">Carte</h3>
            <div className="ui items courses">
              {
                this.props.items.map( item => {

                  return <div key={item.id} className="ui item">

                    <div className="ui image medium">
                      <img src={ item.image } alt=""/>
                    </div>

                    <div className="content">
                      <h3 className="header">{ item.name }</h3>
                      <div className="description">
                        <p>
                          { item.description }
                        </p>
                      </div>
                      <div className="ui label big black">
                        { item.price }
                      </div>

                      <div>
                        <i onClick={ (e) => { this.props.addToShoppingCard(item.id); }} className="add circle link icon big"></i>
                      </div>
                    </div>

                  </div>

                })
              }
            </div>
        </div>
      </div>
    );
  }
}

export default List;
