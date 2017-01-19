import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';

class TaskList extends Component {

    saveTask(e){
      e.preventDefault();
      Meteor.call('task.insert', this.refs.singleTask.value, this.props.projectId)
    }

    renderTasks() {
      return this.props.tasks.map(task=>{
        return (
          <li key={task.projectId}>
            {task.title} - {task.projectId}
          </li>
        )
      })
    }

  
    render() {
        if (!this.props.tasks) {
            return <div>Loading...</div>
        }
        
        return(
            <div className="">
              <input type="text" className="form-control" ref="singleTask"/>
              <button className="btn btn-success" onClick={this.saveTask.bind(this)}>Save</button>
              
              <hr/>

              {this.renderTasks()}
            </div>
        )
    }
}



export default createContainer((props)=>{
    console.log('id:',props.projectId)
    Meteor.subscribe('tasks');
    
    return {tasks: Tasks.find({projectId: props.projectId}).fetch()};
},TaskList);
