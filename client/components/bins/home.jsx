import React, {Component} from 'react';
import BinsList from './bins_list';
import BinsListMark from './bins_list_mark';

class HomeComponent extends Component {
    render() {
        return(
            <div>
                <BinsList />
                <hr/>
                <BinsListMark />
            </div>
        )
    }
}

export default HomeComponent;