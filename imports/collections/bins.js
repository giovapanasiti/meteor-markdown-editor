import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function(){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        return Bins.insert({
            createdAt: new Date(),
            title:'',
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    },
    'bins.remove': function(bin) {
        return Bins.remove(bin);
    },
    'bins.update': function(bin, content){
        return Bins.update(bin._id, {
            $set: {
                content: content
            }
        });
        // What im saying: i want to find the bin with bin._id and update it's content with newContent
    },
    'bins.update-title': function(bin, title){
        return Bins.update(bin._id, {
            $set: {
                title: title
            }
        });
        // What im saying: i want to find the bin with bin._id and update it's content with newContent
    },
    'bins.share': function(bin, email) {
        return Bins.update(bin._id, {
            $push: { sharedWith: email }
            // push just push a new record into the array
        });
    }
})

export const Bins = new Mongo.Collection('bins');