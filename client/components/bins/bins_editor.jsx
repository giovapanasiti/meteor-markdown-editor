import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins } from '../../../imports/collections/bins';

import CodeMirror from 'react-codemirror';

import 'codemirror/mode/markdown/markdown';


class BinsEditor extends Component {
    onEditorChange(content){
        Meteor.call('bins.update', this.props.bin, content);
    }

    onTitleChange(content){
        Meteor.call('bins.update-title', this.props.bin, this.refs.title.value);
    }

    render(){
        return(
            <div className="col-xs-8">
                   <h5>Input</h5>

                   <div className="form-group">
                        <label >Title:</label>

                        <input className="form-control" ref="title" onChange={this.onTitleChange.bind(this)} value={this.props.bin.title}/>
                   </div>
                   
                   <CodeMirror 
                   value={this.props.bin.content}
                   onChange={this.onEditorChange.bind(this)} 
                   options={{ mode: 'markdown', lineNumbers: true }} className="height-editor" />
            </div>
        );
    }
}

export default BinsEditor;