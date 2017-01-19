import {Mongo} from 'meteor/mongo';


Meteor.methods({
    'task.insert': function(title,projectId){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        console.log('***********daje')
        return Tasks.insert({
            createdAt: new Date(),
            title:title,
            projectId: projectId,
            isChecked: false,
            sharedWith: [],
            ownerId: this.userId
        });
    },
    'task.checked': function(task, isChecked){
        console.log('task: ', task);
        console.log('isChecked:  ', isChecked);
        return Tasks.update(task._id, {
            $set: {
                isChecked: !isChecked
            }
        });
    },
    'task.remove': function(task) {
        return Tasks.remove(task);
    },
});

export const Tasks = new Mongo.Collection('tasks');

