import React from 'react';
import Header from './header'


export default (props)=> {
    return (
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <Header />  
            </div>
            <div className="page-content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        {props.children}
                    </div>
                 </div>
            </div>
        </div>
    );
}