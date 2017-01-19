import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';

class ProjectsHome extends Component {

    onProjectRemove(project) {
        if (confirm('Are you sure you want to remove this project forever?')) {
    // Save it!
            Meteor.call('project.remove', project);
        } else {
    // Do nothing!
            return
        }
    }

    

    onProjectSave(event) {
        event.preventDefault();
        console.log('onProjectSave');
        Meteor.call('project.insert', this.refs.title.value, this.refs.description.value)    
    }

    renderList() {
        return this.props.projects.map(project=>{

            const url = `/project/${project._id}`;

            return (

                <div className="panel panel-default" key={project._id}>
                    <div className="panel-heading">
                        <h3 className="panel-title">{project.title}</h3>
                        
                    </div>
                    <div className="panel-body">
                        <p>{project.description}</p>
                        
                    </div>
                    <div className="panel-footer">
                        
                        <span className="btn-group">
                            <Link to={url} className="btn btn-primary">
                                Work <i className="glyphicon glyphicon-pencil"></i>
                            </Link>
                        </span>
                        
                    </div>
                </div>

            )
        })
    }

    render() {
        console.log('this.props.projects:', this.props.projects);
        return(
          <div>


            <div className="container">
                <ul className="list-group">
                    <h2>Your Projects    
                    <button className="btn btn-success" data-toggle="modal" data-target="#newProject">New Project</button> 
                    </h2>

                    <div className="gallery">
                        {this.renderList()}
                    </div>


                </ul>
            </div>

        
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
                        <label>Title</label>
                        <input type="text" className="form-control" ref="title" required />
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="3" ref="description" required></textarea>
                      </div>
                      
                      <button type="submit" className="btn btn-primary" onClick={this.onProjectSave.bind(this)}>Save Project</button>
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
