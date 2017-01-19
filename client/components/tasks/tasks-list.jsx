import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';

class TaskList extends Component {

    saveTask(e){
      e.preventDefault();
      Meteor.call('task.insert', this.refs.singleTask.value, this.props.projectId);
      this.refs.singleTask.value='';
    }

    removeTask(task){
      if (confirm('Are you sure you want to remove this bin forever?')) {
    // Save it!
            Meteor.call('task.remove', task);
        } else {
    // Do nothing!
            return
        }
    }

    setIsChecked(task, isChecked) {
      console.log('chiamata is check')
       Meteor.call('task.checked', task, isChecked);
    }


    renderTasks() {
      return this.props.tasks.map(task=>{
        return (
          <li key={task._id} className="list-group-item">
            <input type="checkbox" checked={task.isChecked} onChange={() => this.setIsChecked(task, task.isChecked)}/>
            {task.title}
              <span className="pull-right">
                <div className="btn-group" role="group" aria-label="...">
                  <button className="btn btn-success" type="button">Expand</button>
                  <button className="btn btn-danger" onClick={()=>{this.removeTask(task)}}>X</button>
                </div>
              </span>
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

              <div className="input-group">
                <input type="text" className="form-control" placeholder="Type here your task..." ref="singleTask" />
                <span className="input-group-btn">
                  <button className="btn btn-success" type="button" onClick={this.saveTask.bind(this)}>Add</button>
                </span>
              </div>
              
              
              <hr/>
              <ul className="list-group">
                {this.renderTasks()}
              </ul>
              
            </div>
        )
    }
}



export default createContainer((props)=>{
    console.log('id:',props.projectId)
    Meteor.subscribe('tasks');
    
    return {tasks: Tasks.find({projectId: props.projectId}).fetch()};
},TaskList);
