import {Meteor} from 'meteor/meteor';

Meteor.publish('myRecipes', function () {
    let count = Recipes.find({author:this.userId}).count();
    console.log(`Published recipes:${count}`);
    Recipes.find({author:this.userId});
});