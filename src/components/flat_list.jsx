import React from 'react';

import Flat from './flat.jsx';
import flats from '../data/flats.js';

class FlatList extends React.Component {

  callMapLocationInApp = (flat) => {
    this.props.flatClicked(flat);
  }

  render() {
    return (
      <div className="flat-list">
        {flats.map(flat => <Flat flat={flat} key={flat.imageUrl} flatClicked={this.callMapLocationInApp} />)}
      </div>
    );
  }
}

export default FlatList;
