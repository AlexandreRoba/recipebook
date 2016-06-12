import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

Template.RecipeList.onCreated(function onCreated() {
    Meteor.subscribe('myRecipes');
});

Template.RecipeList.helpers({
    recipes(){
        return Recipes.find({});
    }
})





