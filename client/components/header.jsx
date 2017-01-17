import React, {Component} from 'react';
import Accounts from './accounts';


class Header extends Component {
    onBinClick(event) {
        event.preventDefault();

        Meteor.call('bins.insert');
    }
    
    render() {
        return(
            <nav className="navbar-default nav">
                <div className="navbar-header">
                    <a className="navbar-brand">Markbin</a>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <a>
                            <Accounts />
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)} >Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;