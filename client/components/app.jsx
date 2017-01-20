import React from 'react';
import Header from './header'


export default (props)=> {
    return (
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <Header />  
            </div>
            <div className="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        {props.children}
                    </div>
                 </div>
            </div>

            
        </div>
    );
}