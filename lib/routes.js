import {FlowRouter} from 'meteor/kadira:flow-router';
import {GAnlytics} from 'meteor/datariot:ganalytics';

FlowRouter.route('/',{
    name:'home',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book',{
    name:'recipe-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'RecipeList'});
    }
});