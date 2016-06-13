import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

Template.RecipeListItem.events({
    'click .toggle-menu':function(){
        Meteor.call('toggleMenuItem',this._id, this.inMenu);
    },
    'click .fa-trash':function(){
        Meteor.call('deleteRecipe',this._id);
    }
});

Template.RecipeListItem.helpers({
    updateRecipeId(){
        return this._id;
    }
});