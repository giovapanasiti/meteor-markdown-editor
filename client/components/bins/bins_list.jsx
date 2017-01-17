import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';

class BinsLists extends Component {
    render() {
        console.log(this.props.bins)
        return(
            <div></div>
        )
    }
}


export default createContainer( ()=>{ 
    Meteor.subscribe('bins'); /*this is going to be passed as props*/
    return { bins: Bins.find().fetch()}
}, BinsLists )