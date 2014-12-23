/**
 * Created by andrew on 23/12/14.
 */

Router.configure ({
   layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('postsList', {path:'/'});
});