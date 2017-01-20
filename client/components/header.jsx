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
            browserHistory.push(`/markdown/${binId}`)
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
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <Link to="/">
                            Daily Tool
                        </Link>
                    </li>
                    <li>
                        <a className="sidebar-brand">
                            <Accounts />
                        </a>
                    </li>
                    <li>
                        <Link to="/bins"><i className="sidebar-icon md-inbox"></i>Your Notes</Link>
                    </li>
                    <li>
                        <Link to="/shared">Shared Notes</Link>
                    </li>
                    <li>
                        <Link to="/projects">Your Projects</Link>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">New Note<span className="caret"></span></a>
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

        );
    }
}

export default Header;