import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsShare from './bins_share';

class BinsMain extends Component {
    render(){

        if (!this.props.bin) {
            return <div>Loading...</div>
        }

        /*The above code is to render the component BinsEditor only once we have this.props.bin*/

        // console.log(this.props.params.binId)
        /*binId was set in the main.jsx in the router as a param
        
                <BinsViewer bin={this.props.bin} />
                
                */
        return(
            <div>
                <BinsEditor bin={this.props.bin} />
                <BinsShare bin={this.props.bin}/>
            </div>
        )
    }
}

export default createContainer((props)=>{
    const {binId} = props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return {bin: Bins.findOne(binId)};
},BinsMain);