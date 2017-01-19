import React, {Component} from 'react';
// import {createContainer} from 'meteor/react-meteor-data';
// import {Bins } from '../../../imports/collections/bins';

class Boilerplate extends Component {
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default Boilerplate;

/*
export default createContainer((props)=>{
    const {binId} = props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return {bin: Bins.findOne(binId)};
},BinsMain);
*/