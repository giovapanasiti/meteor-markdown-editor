import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import {Link} from 'react-router';
import BinsSharedListsMark from '../bins-markdown/bins_shared_mark';


class BinsSharedLists extends Component {
    onBinRemove(bin) {
        // Meteor.call('bins.remove', bin);
        // TODO
        /* this should call an "unshare" method */
    }

    renderList() {
        return this.props.bins.map(bin=>{

            const url = `/bin/${bin._id}`;

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
        console.log(this.props.bins);
        return(
            <div className="">
                <div className="alert alert-danger" role="alert">
                    <h2>There are some problems</h2>
                    <p>This feature still not works very good at the moment for the markdown bins. It'll be update soon!</p>
                </div>
                <h2>Visual Bins Shared with You</h2>
                <ul className="list-group">
                    
                    {this.renderList()}
                </ul>

                <hr/>
                <BinsSharedListsMark />

            </div>
        )
    }
}


export default createContainer( ()=>{ 
    // Meteor.subscribe('bins'); /*this is going to be passed as props*/
    Meteor.subscribe('sharedBins');
    return { bins: Bins.find().fetch()}
}, BinsSharedLists )