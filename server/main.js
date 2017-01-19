import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';
import {BinsMark} from '../imports/collections/bins-mark';
import {Projects} from '../imports/collections/projects';
import {Tasks} from '../imports/collections/tasks';


Meteor.startup(() => {
  // code to run on server at startup
  
  Meteor.publish('bins', function(){
    return Bins.find({ownerId: this.userId});
  });

  Meteor.publish('binsMark', function(){
    return BinsMark.find({ownerId: this.userId});
  });

  Meteor.publish('sharedBins', function(){
    const user = Meteor.users.findOne(this.userId)

    if (!user) {return;}

    const email = user.emails[0].address;

    return Bins.find({
      sharedWith: { $elemMatch: {$eq: email}}
    });
    // looks all the different bins we have, look at the sharedWith 
    // at each. Walk through that array and search which one match "email"
  });

  Meteor.publish('sharedBinsMark', function(){
    const user = Meteor.users.findOne(this.userId)

    if (!user) {return;}

    const email = user.emails[0].address;

    return BinsMark.find({
      sharedWith: { $elemMatch: {$eq: email}}
    });
    // looks all the different bins we have, look at the sharedWith 
    // at each. Walk through that array and search which one match "email"
  });

  // Projects

  Meteor.publish('projects', function(){
    return Projects.find({ownerId: this.userId});
  });

  Meteor.publish('tasks', function(){
    return Tasks.find({ownerId: this.userId});
  });


});


