import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker.jsx';
import FlatList from './flat_list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  changeMapLocation = (flat) => {
    this.setState({
      lat: flat.lat,
      lng: flat.lng
    });
  }

  render() {
    return (
      <div>
        <FlatList flatClicked={this.changeMapLocation} />
        <div className="map-container" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA4CImpWL0i8Xu9hsFxAbnhlQHC40XDn5k" }}
            defaultCenter={{ lat: 48.854211, lng: 2.34689 }}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.lat}
              lng={this.state.lng}
              text=""
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
