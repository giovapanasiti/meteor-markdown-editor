import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';
import TaskList from '../tasks/tasks-list';

class ProjectsMain extends Component {
    onProjectUpdate(event) {
        event.preventDefault();
        console.log('onProjectUpdate');
        Meteor.call('project.update', this.props.project, this.refs.title.value, this.refs.description.value)    
    }
  
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
                <button type="button" className="btn btn-info btn-medium btn-md btn-raised btn-fab btn-fab-mini" id="btn-new-project" data-toggle="modal" data-target="#editProj">
                    <i className="glyphicon glyphicon-pencil"></i>
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
                                <form>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" className="form-control" ref="title" required value={this.props.project.title} onChange={this.onProjectUpdate.bind(this)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" rows="3" ref="description" required value={this.props.project.description} onChange={this.onProjectUpdate.bind(this)}></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary" >Save Project</button>
                                </form>
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
