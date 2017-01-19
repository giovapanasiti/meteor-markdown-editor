import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins } from '../../../imports/collections/bins';
import {Link} from 'react-router';

import CodeMirror from 'react-codemirror';

import 'codemirror/mode/markdown/markdown';

var ReactQuill = require('react-quill');


class BinsEditor extends Component {
    onEditorChange(content){
        Meteor.call('bins.update', this.props.bin, content);
    }

    onTitleChange(content){
        Meteor.call('bins.update-title', this.props.bin, this.refs.title.value);
    }


    render(){

        
        return(
            <div className="col-xs-12">
                   <div className="form-group">
                        <label >Title:</label>
                        <input className="form-control" ref="title" onChange={this.onTitleChange.bind(this)} value={this.props.bin.title}/>
                   </div>

                   <ReactQuill value={this.props.bin.content} onChange={this.onEditorChange.bind(this)} theme="snow"/>

      
            </div>
        );
    }
}

export default BinsEditor;