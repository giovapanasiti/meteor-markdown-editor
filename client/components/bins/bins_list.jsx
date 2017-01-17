import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';

class BinsLists extends Component {
    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        return this.props.bins.map(bin=>{
            return (
                <li className="list-group-item" key={bin._id}>
                    <strong>Bin:</strong> {bin._id}
                    <span className="pull-right">
                        <button className="btn btn-danger" onClick={()=>{this.onBinRemove(bin)}}>
                            Remove
                        </button>
                    </span>
                </li>
            )
        })
    }
    render() {
        console.log(this.props.bins);
        return(
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}


export default createContainer( ()=>{ 
    Meteor.subscribe('bins'); /*this is going to be passed as props*/
    return { bins: Bins.find().fetch()}
}, BinsLists )