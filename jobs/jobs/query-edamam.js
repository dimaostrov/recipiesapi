const MongoClient = require('mongodb').MongoClient;

module.exports = function(agenda) {
    agenda.define('query edamam', function(job, done) {

        // Connect to the db
        MongoClient.connect("mongodb://localhost:27017/recipes", function(err, db) {
            if(!err) {
                db.collection('jobs').findOneAndUpdate({_id: job.attrs.data.rideId},
                    { $set: { status: 'expired' }}, function (err) {
                    if(!err) {
                        done();
                    }
                })
            }
            if(err) {
                console.log(err);
                done();
            }
        });
    });
};

const generateCall = (search, appId, appKey) => {
    return `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}&from=0&to=30`
}