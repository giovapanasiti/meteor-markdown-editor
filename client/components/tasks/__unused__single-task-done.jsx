import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';

class SingleTaskDone extends Component {

    saveTask(e){
      e.preventDefault();
      Meteor.call('task.insert', this.refs.singleTask.value, this.props.projectId);
      this.refs.singleTask.value='';
    }

    removeTask(task){
          Meteor.call('task.remove', task);
          sweetAlert("Delete confirm!", "You Deleted the Task", "success");
    }

    setIsChecked(task, isChecked) {
       console.log('chiamata is check')
       Meteor.call('task.checked', task, isChecked);
    }

    render() {
        if (!this.props.task) {
            return <div>Loading...</div>
        }

        const task = this.props.task;

        /*
        <li key={task._id} className="list-group-item">
            <input type="checkbox" checked={task.isChecked} onChange={() => this.setIsChecked(task, task.isChecked)}/>
            <del>{task.title}</del>
              <span className="pull-right">
                <div className="btn-group" role="group" aria-label="...">
                  <button className="btn btn-success" type="button"></button>
                  <button className="btn btn-danger btn-raised " onClick={()=>{this.removeTask(task)}}>X</button>
                </div>
              </span>
          </li> 

          <li key={task._id} className="list-group-item">
                    
                  <div className="col-xs-1"> 
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" 
                              checked={task.isChecked} 
                              onChange={() => this.setIsChecked(task, task.isChecked)} 
                              name={`task-${task._id}`}/>

                        <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-9">
                    <label htmlFor={`task-${task._id}`}>
                      titolo
                    </label>
                  </div>

                  <div className="col-xs-2">
                        
                  </div>
                </li> 

          <label className="btn btn-default">
          <input type="checkbox" autocomplete="off">
          <span className="glyphicon glyphicon-ok"></span>
          </label>

        */
        
        return(
         <div className="single-task-box">
            <div className="checkbox">
                <label onClick={() => this.setIsChecked(task, task.isChecked)}>
                  <input type="checkbox" 
                              checked={task.isChecked} 
                              onChange={() => this.setIsChecked(task, task.isChecked)} 
                              name={`task-${task._id}`}/>
                  <span className="checkbox-material"><span className="check"></span> </span>
                  {task.title}
                </label>

              <button className="btn btn-danger btn-raised" onClick={()=>{this.removeTask(task)}}>X</button>
              </div>
         </div>
        )
    }
}



export default SingleTaskDone;