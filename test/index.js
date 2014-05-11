var test = require('tape');
var members = require('../');

test('single org with single member', function (t) {
  members('ahdinosaur-os', function (err, members) {
    t.error(err, "no error");
    t.equal(members.length, 1, "one member");
    t.equal(members[0].login, 'ahdinosaur', "correct member");
    t.end();
  });
});