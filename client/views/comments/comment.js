/**
 * Created by andrew on 05/01/15.
 */
Template.comment.helpers({
    submittedText: function() {
        return new Date(this.submitted).toString();
    }
});