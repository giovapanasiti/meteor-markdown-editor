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

    onMarkClick(event) {
        event.preventDefault();

        Meteor.call('binsMark.insert', (error, binId)=>{
            
            // react router redirect:
            browserHistory.push(`/bins/markdown/${binId}`)
        });    
    }

    /*<li>
                        <a href="#" onClick={this.onBinClick.bind(this)} className="" title="create new" alt="create new">
                            <i className="glyphicon glyphicon-plus-sign btn-success btn btn-circle"></i>
                        </a>
                    </li>
*/
    
    render() {
        return(
            <nav className="navbar-default nav">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markdown Notes</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <a>
                            <Accounts />
                        </a>
                    </li>
                    <li>
                        <a href="/bins">Your bins</a>
                    </li>
                    <li>
                        <a href="/shared">Shared Bins</a>
                    </li>
                    <li>
                        <a href="/projects">Your Projects</a>
                    </li>
                </ul>


                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Create New <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" onClick={this.onBinClick.bind(this)} className="" title="create new" alt="create new">
                                <i className="glyphicon glyphicon-plus-sign btn-success btn btn-circle"></i> New Visual
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a href="#" onClick={this.onMarkClick.bind(this)} className="" title="create new" alt="create new">
                                <i className="glyphicon glyphicon-plus-sign btn-success btn btn-circle"></i> New Markdown
                            </a>
                        </li>
                        
                    </ul>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Header;