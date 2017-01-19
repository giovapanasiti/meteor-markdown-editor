import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'binsMark.insert': function(){
        /* if we use the "fat arrow function"" it breaks the value of this.userId */
        return BinsMark.insert({
            createdAt: new Date(),
            title:'',
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    },
    'binsMark.remove': function(bin) {
        return BinsMark.remove(bin);
    },
    'binsMark.update': function(bin, content){
        return BinsMark.update(bin._id, {
            $set: {
                content: content
            }
        });
        // What im saying: i want to find the bin with bin._id and update it's content with newContent
    },
    'binsMark.update-title': function(bin, title){
        return BinsMark.update(bin._id, {
            $set: {
                title: title
            }
        });
        // What im saying: i want to find the bin with bin._id and update it's content with newContent
    },
    'binsMark.share': function(bin, email) {
        return BinsMark.update(bin._id, {
            $push: { sharedWith: email }
            // push just push a new record into the array
        });
    }
})

export const BinsMark = new Mongo.Collection('binsMark');