import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {BinsMark} from '../../../imports/collections/bins-mark';
import {Link} from 'react-router';
import {markdown} from 'markdown';

class BinsListsMark extends Component {
    onBinRemove(bin) {
        new Confirmation({
            message: "Are you sure ?",
            title: "Confirmation",
            cancelText: "Cancel",
            okText: "I'm sure",
            success: false, // whether the button should be green or red
            focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
            }, function (ok) {
                if (ok) {
                    Meteor.call('binsMark.remove', bin);
                    sweetAlert("Delete confirm!", "You Deleted the Note", "success");   
                } else { return; }
            // ok is true if the user clicked on "ok", false otherwise
                
            });
        
    }

    renderList() {
        return this.props.binsMark.map(bin=>{

            const url = `/markdown/${bin._id}`;

            return (
                <div className="panel panel-default" key={bin._id}>
                    <div className="panel-heading"><h6>{bin.title}</h6></div>
                    <div className="panel-body">
                        <span className="pull-right btn-group">
                            <button className="btn btn-danger btn-sm btn-raised" onClick={()=>{this.onBinRemove(bin)}}>
                                Remove
                            </button>
                            <Link to={url} className="btn btn-primary btn-raised btn-sm">
                               Edit <i className="glyphicon glyphicon-pencil"></i>
                            </Link>
                            <button type="button" className="btn btn-info btn-raised btn-sm" data-toggle="modal" data-target={`#modal${bin._id}`}>
                                 Read 
                            </button>
                        </span>
                    </div>

                    <div className="modal fade" id={`modal${bin._id}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">{bin.title}</h4>
                            </div>
                            
                            <div className="modal-body">
                                <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(bin.content) }} ></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-raised btn-primary" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Close</span></button>
                            </div>
                            
                            </div>
                        </div>
                    </div>  
                </div> 
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