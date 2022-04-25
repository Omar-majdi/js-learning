/*
  Loop Challenge
*/

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
  'Anwar',
];

document.write(`<div>We Have X Admins</div>`);

let admins_count = 0;
myAdmins.length = myAdmins.indexOf('Stop');
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

document.write(`<hr/>`);

let leader = 0;
let teamN = 0;
let workerN = 0;
for (; leader < myAdmins.length; leader++) {
  teamN++;
  document.write(
    `<div>The admin For Team ${teamN} is ${myAdmins[leader]}</div>`
  );
  letter = myAdmins[leader][0];
  document.write(`<h3>Team Members:</h3>`);
  for (let workers = 0; workers < myEmployees.length; workers++) {
    myEmployees[workers].startsWith(letter)
      ? document.write(`<p>- ${++workerN} ${myEmployees[workers]}</p>`)
      : (workers = workers);
  }
  workerN = 0;
  document.write(`<hr/>`);
}
