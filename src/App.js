import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './components/Calendar'

class App extends Component{
    render () {
        return (
            <div>
                 <Calendar/> 
                 <p>{"Selected Date:" + this.props.store.selectedDate.toDateString()}</p> 
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(App)