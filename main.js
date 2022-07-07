let myVar = 'country';

let user = {
  // Properties
  name: 'Omar',
  age: 38,
  skills: ['HTML', 'CSS', 'JS'],
  available: false,
  adresses: {
    ksa: 'Riyadh',
    egypt: {
      one: 'Cairo',
      two: 'giza',
    },
  },
  checkAv: () => {
    if (user.available) {
      return `Free for work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills.join(' '));
console.log(user.skills[2]);
console.log(user.adresses.ksa);
console.log(user.adresses.egypt.one);
console.log(user.adresses.egypt.two);
console.log(user['adresses'].egypt.one);
console.log(user.checkAv());
