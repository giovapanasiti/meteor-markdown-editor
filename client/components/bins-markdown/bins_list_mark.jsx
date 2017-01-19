import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {BinsMark} from '../../../imports/collections/bins-mark';
import {Link} from 'react-router';

class BinsListsMark extends Component {
    onBinRemove(bin) {
        if (confirm('Are you sure you want to remove this bin forever?')) {
    // Save it!
            Meteor.call('binsMark.remove', bin);
        } else {
    // Do nothing!
            return
        }
        
    }

    renderList() {
        return this.props.binsMark.map(bin=>{

            const url = `/markdown/${bin._id}`;

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
            <div className="">
                <ul className="list-group">
                    <h2>Your Markdown Bin</h2>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}


export default createContainer( ()=>{ 
    Meteor.subscribe('binsMark'); /*this is going to be passed as props*/
    // Meteor.subscribe('sharedBins');
    return { binsMark: BinsMark.find().fetch()}
}, BinsListsMark )