import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsMainMarkdown from './components/bins-markdown/bins_main_markdown';
import BinsList from './components/bins/bins_list';
import {Projects} from '../imports/collections/projects'
import {Bins} from '../imports/collections/bins';
import BinsSharedList from './components/bins/bins_shared';
import NotesHome from './components/notes_home';
import GeneralHome from './components/general_home';
import ProjectsHome from './components/projects/projects_home';
import ProjectsMain from './components/projects/projects_main';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={GeneralHome} /> 
            <Route path="bins" component={NotesHome}></Route> 
            <Route path="bin/:binId" component={BinsMain}></Route> 
            <Route path="markdown/:binId" component={BinsMainMarkdown}></Route> 
            <Route path="shared" component={BinsSharedList}></Route> 
            <Route path="projects" component={ProjectsHome}></Route> 
            <Route path="project/:projectId" component={ProjectsMain}></Route> 
        </Route>
    </Router>
);


Meteor.startup(()=>{
    ReactDOM.render(routes, document.querySelector('.render-target'));
});
