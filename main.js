/*
  Loop
  - Loop On Sequences
*/

let myFriends = [1, 2, 'Osama', 'Ahmed', 3, 4, 'Sayed', 6, 'Ali'];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === 'string') {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames);
