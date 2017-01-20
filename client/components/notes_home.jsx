import React, {Component} from 'react';
import BinsList from './bins/bins_list';
import BinsListMark from './bins-markdown/bins_list_mark';
import BinsSharedLists from './bins/bins_shared';


class NotesHome extends Component {
    render() {
        return(
            <div className="col-xs-12">
                <div className="col-sm-6"><BinsList /></div>
                <div className="col-sm-6"><BinsListMark /></div>
                
                <hr/>
            </div>
        )
    }
}

export default NotesHome;