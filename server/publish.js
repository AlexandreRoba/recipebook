import {Meteor} from 'meteor/meteor';

Meteor.publish('myRecipes', function () {
    Recipes.find({author:this.userId});
});