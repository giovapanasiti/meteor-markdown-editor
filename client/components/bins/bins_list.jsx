import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import {Link} from 'react-router';

class BinsLists extends Component {
    onBinRemove(bin) {
        if (confirm('Are you sure you want to remove this bin forever?')) {
    // Save it!
            Meteor.call('bins.remove', bin);
        } else {
    // Do nothing!
            return
        }
        
    }

    renderList() {
        return this.props.bins.map(bin=>{

            const url = `/bin/${bin._id}`;

            return (
                
                    <li className="list-group-item" key={bin._id}>
                    
                    <strong>{bin.title}  </strong> 
                    <span className="label label-success">{bin._id}</span>    
                        
                        <span className="pull-right btn-group">
                            <button className="btn btn-danger" onClick={()=>{this.onBinRemove(bin)}}>
                                Remove
                            </button>
                            <Link to={url} className="btn btn-primary">
                                Edit <i className="glyphicon glyphicon-pencil"></i>
                            </Link>
                        </span>
                    </li>
                
            )
        })
    }
    render() {
        console.log(this.props.bins);
        return(
            <div className="container">
                <ul className="list-group">
                    <h2>Your Visual Bin</h2>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}


export default createContainer( ()=>{ 
    Meteor.subscribe('bins'); /*this is going to be passed as props*/
    // Meteor.subscribe('sharedBins');
    return { bins: Bins.find().fetch()}
}, BinsLists )