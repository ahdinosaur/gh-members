var Chainy = require('chainy').extend()
  .require([
    'set',
    'feed',
    'flatten',
    'count',
    'uniq',
    'map',
  ]);

module.exports = function (orgs, callback) {

  if (typeof orgs === 'string') {
    orgs = [orgs];
  }

  Chainy.create()
  // specifiy the github organisations to fetch members for
  .set(orgs)

  // fetch the public members for the organisations
  .map(function(org, complete) {
    Chainy.create()
      .feed("https://api.github.com/orgs/"+org+"/public_members")
      .done(complete);
  })

  // merge the results of each organisation together into one flat array
  .flatten()

  // as a github user could be in multiple organisations, lets ensure duplicates are removed
  .uniq('id')

  // now lets replace the shallow member details with their full github profile details via the profile api
  .map(function(user, complete) {
    Chainy.create()
      .feed(user.url)
      .done(complete);
  })

  // callback
  .done(callback);
};
