import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';
import TaskList from '../tasks/tasks-list';

class ProjectsMain extends Component {

  
    render() {
        console.log('this.props',this.props);
        console.log('this.props.project',this.props.project);

        if (!this.props.project) {
            return <div>Loading...</div>
        }
        
        return(
            <div className="container">
                <h2>{this.props.project.title}</h2>
                <p>{this.props.project.description}</p>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#editProj">
                Edit Project
                </button>

                <hr/>

                <h2>Tasks</h2>
                <ul className="list-group">
                    <TaskList projectId={this.props.project._id}/>
                </ul>


                <div className="modal fade" id="editProj" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                -
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default createContainer((props)=>{
    const {projectId} = props.params;
    Meteor.subscribe('projects')
    Meteor.subscribe('tasks');
    
    return {project: Projects.findOne(projectId)};
},ProjectsMain);
