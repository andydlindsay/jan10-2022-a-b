const user = {
  name: 'Alice',
  age: 42,
  hair: 'brown',
  likes: ['poodles', 'waterfalls']
};

// const copy = user;
const copy = { 
  ...user,
  name: 'Bob',
  likes: [
    ...user.likes,
    'gaming'
  ]
};

// copy.name = 'Bob';
// copy.likes.push('gaming');

console.log('user', user);
console.log('copy', copy);
