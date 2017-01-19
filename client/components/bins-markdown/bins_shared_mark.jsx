import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {BinsMark} from '../../../imports/collections/bins-mark';
import {Link} from 'react-router';

class BinsSharedListsMark extends Component {
    onBinRemove(bin) {
        // Meteor.call('bins.remove', bin);
        // TODO
        /* this should call an "unshare" method */
    }

    renderList() {
        return this.props.binsMark.map(bin=>{
            const url = `/markdown/${bin._id}`;

            return (
                <li className="list-group-item" key={bin._id}>
                    
                    <strong>{bin.title}  </strong> 
                    <span className="label label-success">{bin._id}</span>    
                        
                    <span className="pull-right btn-group">
                            
                        <Link to={url} className="btn btn-primary">
                            Write <i className="glyphicon glyphicon-pencil"></i>
                        </Link>
                     </span>
                </li>
            )
        })
    }
    render() {
        
        return(
            <div className="">
                
                <h2>Markdown Shared with You</h2>
                <ul className="list-group">
                    
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}


export default createContainer( ()=>{ 
    // Meteor.subscribe('bins'); /*this is going to be passed as props*/
    Meteor.subscribe('sharedBinsMark');
    return { binsMark: BinsMark.find().fetch()}

    
}, BinsSharedListsMark )