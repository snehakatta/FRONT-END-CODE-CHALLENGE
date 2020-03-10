
/*
  Build your React Map Component here.
  Feel free to use class or functional component
*/

import React, {Component} from 'react';
import Map from './Map';
import UserDetails from './UserDetails'
import styles from './appStyles.css'


// App comoment is main component to render title and map component
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        <div className="title-section"> 
        <h1>USER ID: 1</h1>
        <h2>TITLE: US States and Capital cities with income data</h2>

        <div className="user-details">
          <UserDetails></UserDetails>
        </div>
        </div>
        <div className="map-section">
          <Map />
        </div>
      </div>
     
    );
  }
}