/**
 * Created by andrew on 23/12/14.
 */

Router.configure ({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading',
    waitOn: function(){return Meteor.subscribe('posts');}
});

Router.map(function(){
    this.route('postsList', {path:'/'});
});

Router.onBeforeAction('loading');