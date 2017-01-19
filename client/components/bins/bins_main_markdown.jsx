import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {BinsMark} from '../../../imports/collections/bins-mark';
import BinsEditorMark from './bins_editor_mark';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMainMarkdown extends Component {
    render(){

        if (!this.props.bin) {
            return <div>Loading...</div>
        }

        /*The above code is to render the component BinsEditor only once we have this.props.bin*/

        // console.log(this.props.params.binId)
        /*binId was set in the main.jsx in the router as a param
        
                
                
                */
        return(
            <div>
                <BinsEditorMark bin={this.props.bin} />
                <BinsShare bin={this.props.bin}/>
                <BinsViewer bin={this.props.bin} />
            </div>
        )
    }
}

export default createContainer((props)=>{
    const {binId} = props.params;
    Meteor.subscribe('binsMark');
    Meteor.subscribe('sharedBinsMark');

    return {bin: BinsMark.findOne(binId)};
},BinsMainMarkdown);