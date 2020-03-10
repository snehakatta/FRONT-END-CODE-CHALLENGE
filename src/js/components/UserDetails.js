

import React, { Component } from 'react';

// User details is component to show user details when we click on button
export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {},
            dateWithFormat: "",
            loading: false
        };
    }


    getUserDetails = () => {
        // Making API call to fetch the user details

        const date = new Date();
        const dateWithFormat = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
        this.setState({loading: true});
        fetch('https://my-json-server.typicode.com/snehakatta/userDetailsJSONServer/profile')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    userDetails: json,
                    dateWithFormat,
                    loading: false
                });
            }
            )
    }

    render() {
        const {userDetails, dateWithFormat, loading } = this.state;
        return (
            <div>
                <button className="user-btn" onClick={this.getUserDetails}>Clike Me</button>
                {loading && <div>loading...</div>}
                {userDetails.userName && !loading && 
                <div className="user-name">{userDetails.userName} on {dateWithFormat}</div>}
            </div>

        );
    }
}