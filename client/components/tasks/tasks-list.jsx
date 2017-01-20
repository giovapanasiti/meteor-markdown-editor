import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';
import SingleTask from './single-task';
// import SingleTaskDone from './single-task-done';
import TaskDetails from './task-details';

class TaskList extends Component {

    saveTask(e){
      e.preventDefault();
      Meteor.call('task.insert', this.refs.singleTask.value, this.props.projectId);
      this.refs.singleTask.value='';
    }

    saveTaskEnter(e){
      e.preventDefault();
      console.log(e)
      if(e.keyCode == 13){
             Meteor.call('task.insert', this.refs.singleTask.value, this.props.projectId);
            this.refs.singleTask.value='';
         }
     
    }

    removeTask(task){
          Meteor.call('task.remove', task);
          sweetAlert("Delete confirm!", "You Deleted the Task", "success");
    }

    setIsChecked(task, isChecked) {
      console.log('chiamata is check')
       Meteor.call('task.checked', task, isChecked);
    }


    renderTasks() {
      return this.props.tasks.map(task=>{
        if (task.isChecked) {
          return
        } else {
          return (
            <SingleTask task={task} key={task._id}/>
          )
        }
      });
    }

    renderTasksDone() {
      return this.props.tasks.map(task=>{
        if (!task.isChecked) {
          return
        } else {
        return (
          <SingleTask task={task} key={task._id}/>
        )
        }
      });
    }

  
    render() {
        if (!this.props.tasks) {
            return <div>Loading...</div>
        }
        
        return(
            <div className="">

            <div className="col-md-6">
              <div className="well task-list-well">
                <h2>Todo:</h2>
                <form onSubmit={this.saveTask.bind(this)}>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type here your task..." ref="singleTask" />
                    <span className="input-group-btn">
                      <button className="btn btn-success btn-raised" type="button" onClick={this.saveTask.bind(this)}>Add</button>
                    </span>
                  </div>
                </form>

                {this.renderTasks()}
              </div>

              <div className="well task-list-well">
                <h4>Done:</h4>
                {this.renderTasksDone()}
              </div>
            </div>

            <div className="col-md-6">
              
            </div>
              <hr/>
              

            </div>
        )
    }
}



export default createContainer((props)=>{
    console.log('id:',props.projectId)
    Meteor.subscribe('tasks');
    
    return {tasks: Tasks.find({projectId: props.projectId}).fetch()};
},TaskList);
