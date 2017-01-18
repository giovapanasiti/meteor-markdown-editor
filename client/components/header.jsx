import React, {Component} from 'react';
import Accounts from './accounts';
import {Link, browserHistory} from 'react-router';


class Header extends Component {
    onBinClick(event) {
        event.preventDefault();

        Meteor.call('bins.insert', (error, binId)=>{
            
            // react router redirect:
            browserHistory.push(`/bins/${binId}`)
        });    
    }
    
    render() {
        return(
            <nav className="navbar-default nav">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <a>
                            <Accounts />
                        </a>
                    </li>
                    <li>
                        <a href="/shared">Shared with you</a>
                    </li>
                </ul>

                <ul className="navbar-right nav navbar-nav">
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)} className="" title="create new" alt="create new">
                            <i className="glyphicon glyphicon-plus-sign btn-success btn btn-circle"></i>
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Header;