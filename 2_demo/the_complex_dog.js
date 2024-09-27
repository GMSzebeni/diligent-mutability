// This dog has a complex of properties.

const zeus = {
  name: 'Zeus',
  colors: ['brown', 'black'],
  owner: {
    name: 'Higgins',
    age: 45
  }
}

const paintedZeus = {
  ...zeus,
}
paintedZeus.colors.push('green');

// console.log('zeus === paintedZeus', zeus === paintedZeus);
// console.log('zeus.colors === paintedZeus.colors', zeus.colors === paintedZeus.colors);
// console.log('zeus.colors', zeus.colors);
// console.log('paintedZeus.colors', paintedZeus.colors);
// console.log('zeus', zeus);
// console.log('paintedZeus', paintedZeus);

// Celebrate the owner's birthday

const apollo = {
  name: 'Apollo',
  colors: ['brown', 'black'],
  owner: {
    name: 'Higgins',
    age: 45
  }
};

const apolloWithOlderOwner = {
  ...apollo
};

apolloWithOlderOwner.owner.age = 46;

// console.log('apollo === apolloWithOlderOwner', apollo === apolloWithOlderOwner);
// console.log('apollo.owner === apolloWithOlderOwner.owner', apollo.owner === apolloWithOlderOwner.owner);
// console.log('apollo.owner', apollo.owner);
// console.log('apolloWithOlderOwner.owner', apolloWithOlderOwner.owner);
// console.log('apollo', apollo);
// console.log('apolloWithOlderOwner', apolloWithOlderOwner);
