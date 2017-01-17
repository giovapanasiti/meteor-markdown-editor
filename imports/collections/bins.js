import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function(){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    },
    'bins.remove': function(bin) {
        return Bins.remove(bin);
    }
})

export const Bins = new Mongo.Collection('bins');