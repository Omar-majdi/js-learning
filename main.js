function showInfo(
  userName = 'Unknown',
  age = 'Unknown',
  rate = '0',
  show = 'Yes',
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${userName}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: $${rate}</p>`);
  if (show === 'Yes') {
    if (skills.length > 0) {
      document.write(`<p>${skills.join(' | ')}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo('Omar', 17, 25, '0', 'HTML', 'CSS', 'JAVASCRIPT');
