import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import {Link} from 'react-router';

class BinsSharedLists extends Component {
    onBinRemove(bin) {
        // Meteor.call('bins.remove', bin);
        // TODO
        /* this should call an "unshare" method */
    }

    renderList() {
        return this.props.bins.map(bin=>{

            const url = `/bins/${bin._id}`;

            return (
                <div>
                    
                    <li className="list-group-item" key={bin._id}>
                    
                    <strong>Bin:  </strong> 
                        <Link to={url}>
                           {bin.title} - <small>{bin._id}</small>
                        </Link>
                        <span class="label label-success">{bin._id}</span>
                        
                        <span className="pull-right">
                            <button className="btn btn-danger" onClick={()=>{this.onBinRemove(bin)}}>
                                Remove
                            </button>
                        </span>
                    </li>
                
                </div>
                
            )
        })
    }
    render() {
        console.log(this.props.bins);
        return(
            <div className="container">
            <ul className="list-group">
                <h2>Bins Shared with You</h2>
                {this.renderList()}
            </ul>
            </div>
        )
    }
}


export default createContainer( ()=>{ 
    // Meteor.subscribe('bins'); /*this is going to be passed as props*/
    Meteor.subscribe('sharedBins');
    return { bins: Bins.find().fetch()}
}, BinsSharedLists )