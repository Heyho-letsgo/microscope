/**
 * Created by andrew on 05/01/15.
 */

// Collection locale (client-seulement)
Errors = new Meteor.Collection(null);
throwError = function (message) {
    Errors.insert({message: message, seen: false})
}
clearErrors = function () {
    Errors.remove({seen: true});
}