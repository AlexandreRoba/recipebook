import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

console.log(Meteor.settings.public.ga.account);

Template.RecipeList.onCreated(function onCreated() {
    Meteor.subscribe('myRecipes');
});





