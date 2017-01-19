import React, {Component} from 'react';
import BinsList from './bins/bins_list';
import BinsListMark from './bins-markdown/bins_list_mark';

class NotesHome extends Component {
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6"><BinsList /></div>
                    <div className="col-sm-6"><BinsListMark /></div>
                </div>

                <hr/>
            </div>
        )
    }
}

export default NotesHome;