Errors = {
    // Collection local (client seulement)
    collection: new Meteor.Collection(null),

    throw: function(message) {
        Errors.collection.insert({message: message, seen: false})
    },
    clearSeen: function() {
        Errors.collection.remove({seen: true});
    }
};