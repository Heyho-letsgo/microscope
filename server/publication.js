/**
 * Created by andrew on 23/12/14.
 */
Meteor.publish('posts',function() {
    return Posts.find();
});

Meteor.publish('comments', function () {
    return Comments.find();
});