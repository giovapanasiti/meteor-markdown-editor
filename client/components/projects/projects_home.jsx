import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';

class ProjectsHome extends Component {

    onProjectRemove(project) {
        new Confirmation({
            message: "Are you sure ?",
            title: "Confirmation",
            cancelText: "Cancel",
            okText: "I'm sure",
            success: false, // whether the button should be green or red
            focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
            }, function (ok) {
                if (ok) {
                    Meteor.call('project.remove', project);
                    sweetAlert("Delete confirm!", "You Deleted the project", "success");
                } else {
                    sweetAlert("You had mercy!", "", "success");
                }
            // ok is true if the user clicked on "ok", false otherwise
                
            });
    }

    

    onProjectSave(event) {
        event.preventDefault();
        console.log('onProjectSave');
        if (!this.refs.title.value) {
            console.log('titolo vuoto');
            $('#project-title').removeClass('hidden');
            return
        } else {
            Meteor.call('project.insert', this.refs.title.value, this.refs.description.value);
             $('#newProject').modal('hide') 
             sweetAlert("Project Created!", "You can start working on it now!!","success");
        }
        
         
    }

    renderList() {
        return this.props.projects.map(project=>{

            const url = `/project/${project._id}`;

            return (
                <div className="item child" key={project._id}>
                <div className="panel panel-default panel-proj" >
                    <div className="panel-heading">
                        <h3 className="panel-title">{project.title}</h3>
                        
                    </div>
                    <div className="panel-body">
                        <p>{project.description}</p>
                        
                    </div>
                    <div className="panel-footer">
                        
                        <span className="btn-group">
                            <Link to={url} className="btn btn-info btn-small btn-sm btn-raised">
                                Open
                            </Link>
                            <button className="btn btn-danger btn-small btn-sm" onClick={()=>{this.onProjectRemove(project)}}>
                                Delete
                            </button>
                        </span>
                        
                    </div>
                </div>
                </div>
            )
        })
    }

    render() {
        console.log('this.props.projects:', this.props.projects);
        return(
          <div>

            <h2>Your Projects</h2>
            <div className="projects-container">
                    <div className="row-proj parent">
                        {this.renderList()}
                    </div>
            </div>

        <button className="btn btn-success btn-fab btn-fab-mini btn-raised" id="btn-new-project" 
                data-toggle="modal" 
                data-target="#newProject"
                >
            <i className="fa fa-plus add-project-btn" aria-hidden="true"></i>
        </button> 


            <div className="modal fade" id="newProject" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Create New Project</h4>
                  </div>
                  <div className="modal-body">
                    
                    <form>
                      <div className="form-group">
                        <div className="alert">
                            <div className="alert alert-danger hidden" id="project-title" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                Title can't be empty
                            </div>
                        </div>
                        <label>Title</label>
                        <input type="text" className="form-control" ref="title" required />
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="3" ref="description" required></textarea>
                      </div>
                      
                      <button type="submit" className="btn btn-success btn-raised" onClick={this.onProjectSave.bind(this)}>Save Project</button>
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
    Meteor.subscribe('projects');
    
    return {projects: Projects.find().fetch()};
},ProjectsHome);
