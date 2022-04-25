// Challenge 1
/*
let start = 10;
let end = 100;
let exclude = 40;

for (start; start <= end; start += 10) {
    if (start === 40) {
        continue;
    }
    console.log(start);
}

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;
*/

// Challenge 2
/*
let start = 10;
let end = 0;
let stop = 3;

const zeroPad = (num, places) => String(num).padStart(places, '0');

for (start; start > 2; start--) {
    if (start < 10) {
        start = zeroPad(start, 2);
  }
  console.log(start);
}
// Output
10;
09;
08;
07;
06;
05;
04;
03;
*/

// Challenge 3 (Not Compleated)
/*
let start = 1;
let end = 6;
let breaker = 2;

const zeroPad = (num, places) => String(num).padStart(places, '-- ');

for (start; start <= end; start++) {
    console.log(start);
    for (breaker; breaker < end; breaker += 2) {
        breaker = zeroPad(breaker, 4);
    }
    console.log(breaker);
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
*/

// Challenge 4
/*
let index = 10;
let jump = 2;
let end = 0;

for (;;) {
    console.log(index);
    index -= jump;
    if (index === end + jump) break;
}

// Output
10;
8;
6;
4;
*/

// Challenge 5 (Not Solved)
/*
let friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';

for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(letter)) {
        friends[i].slice(i, ++i);
    }
    console.log(friends[i]);
}
// Output
('1 => Sayed');
('2 => Eman');
('3 => Mahmoud');
('4 => Osama');
('5 => Sameh');
*/

// Challenge 6 (Not Solved)
/*
let start = 0;
let swappedName = 'elZerO';
for (start; start < swappedName.length; start++) {
    swappedName.indexOf(start).
}
// Output
('ELzERo');
*/

// Challenge 7
/*
let start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];
mix.shift();
for (start; start < mix.length; start++) {
    if (typeof mix[start] === 'string') {
        continue;
    }
    console.log(mix[start]);
}
// Output
2;
3;
4;
*/
