import {Mongo} from 'meteor/mongo';


Meteor.methods({
    'task.insert': function(title,projectId){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        console.log('***********daje')
        return Tasks.insert({
            createdAt: new Date(),
            title:title,
            projectId: projectId,
            sharedWith: [],
            ownerId: this.userId
        });
    },
});

export const Tasks = new Mongo.Collection('tasks');

