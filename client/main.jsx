import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsMainMarkdown from './components/bins/bins_main_markdown';
import BinsList from './components/bins/bins_list';

import {Bins} from '../imports/collections/bins';
import BinsSharedList from './components/bins/bins_shared';
import HomeComponent from './components/bins/home'


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeComponent} />
            <Route path="bins/:binId" component={BinsMain}></Route>
            <Route path="markdown/:binId" component={BinsMainMarkdown}></Route>
            <Route path="shared" component={BinsSharedList}></Route>
        </Route>
    </Router>
);


Meteor.startup(()=>{
    ReactDOM.render(routes, document.querySelector('.render-target'));
});
