import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects } from '../../../imports/collections/projects';
import {Link} from 'react-router';
import {Tasks} from '../../../imports/collections/tasks';

class SingleTask extends Component {

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


  
    render() {
        if (!this.props.task) {
            return <div>Loading...</div>
        }

        const task = this.props.task
        
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
              </div>
         </div>
        )
    }
}



export default SingleTask;