import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'project.insert': function(title, description){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        return Projects.insert({
            createdAt: new Date(),
            title:title,
            description:description,
            sharedWith: [],
            ownerId: this.userId
        });
    },
    'project.update': function(project, title, description){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        return Projects.update(project._id, {
            $set: {
                title: title,
                description: description
            }
        });
    },

    'project.remove': function(project) {
        return Projects.remove(project);
    },
});

export const Projects = new Mongo.Collection('projects');
