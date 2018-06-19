import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
        style={{ width: '70%', height: '60%', position: 'relative', marginLeft: 'auto', marginRight: 'auto' }}
        initialCenter={{
          lat: 39.8107775,
          lng: -86.2027602
        }}
        className={'map'}
        zoom={14}>
        <Marker
          title={'Marian University'}
          name={'SOMA'}
          position={{ lat: 39.8107775, lng: -86.2027602 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer)