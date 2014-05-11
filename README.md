# gh-members

fetches GitHub org members with full profile info

## how to

### install

```
npm install --save gh-members
```

### use

```
members(['bevry', 'docpad'], function (err, members) {
  if (err) { throw err; }
  console.log(members);
});
```

## license

ISC