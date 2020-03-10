
import React, { Component } from 'react';
import MapGL, { NavigationControl, Source, Layer } from 'react-map-gl';
import { BASIC_STYLE } from './Style';
import { usIncome } from '../../data/incomeData';
import { stateCapitals } from '../../data/stateCapitals';


// Map component to show the map and populate data on map 
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.8,
        longitude: -122.4,
        zoom: 3,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {

    return (
      <MapGL
        {...this.state.viewport}
        width="95vw"
        height="75vh"
        mapStyle={BASIC_STYLE}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Source id="us-income-data" type="geojson" data={usIncome}>
          <Layer
            id="usIncome"
            type="fill"
            paint={{
              "fill-color": "rgba(0,0,0,0.2)"
            }} />
        </Source>
        <Source id="us-captial-states" type="geojson" data={stateCapitals}>
          <Layer
            id="captialStates"
            type="circle"
            paint={{
              'circle-radius': 4,
              'circle-color': '#FF0000'
            }} />
        </Source>

        <div className="navigation-controlls">
          <NavigationControl />
        </div>
      </MapGL>
    );
  }
}