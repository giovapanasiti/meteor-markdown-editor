import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins } from '../../../imports/collections/bins';
import {Link} from 'react-router';

import CodeMirror from 'react-codemirror';

import 'codemirror/mode/markdown/markdown';

var ReactQuill = require('react-quill');

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

class BinsEditor extends Component {
    onEditorChange(content){
        const cleanHTML = sanitizeHtml(content);
        Meteor.call('bins.update', this.props.bin, cleanHTML);
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
                <ReactSummernote
                    value={this.props.bin.content}
                    options={{
                    height: 400,
                    dialogsInBody: true,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture', 'video']],
                        ['view', ['fullscreen', 'codeview']]
                    ]
                    }}
                    onChange={this.onEditorChange.bind(this)}
                />
            </div>
        );
    }
}

export default BinsEditor;