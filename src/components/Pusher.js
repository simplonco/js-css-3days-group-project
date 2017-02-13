import React, {PropTypes} from 'react';
import MastHead from './MastHead';
import Description from './Description';
import List from './List';

const Pusher = (props) => {
  console.log('Pusher props : ', props);
  return (
    <div className="pusher">
      <MastHead { ...props }/>
      <Description />
      <List { ...props } />

    </div>
  )
}

export default Pusher;
