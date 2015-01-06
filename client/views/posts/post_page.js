/**
 * Created by andrew on 05/01/15.
 */


Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
    });
