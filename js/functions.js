/*
This is the JavaScript file.  This code controls the behavior
of the website.  The HTML and CSS generally creates static,
unchanging websites.  JavaScript allows you to make interactive
things like buttons, change what text, components, etc are displayed,
and any general weird stuff you want to do.
*/

function generateRandomPercent() {
  const percent = Math.floor(Math.random() * 80);
  console.log(percent);
  return `${percent}%`
}

function makeBox() {
  const box = document.createElement('div');
  box.classList.add("box");
  box.style.top = generateRandomPercent();
  box.style.left = generateRandomPercent();
  document.getElementById("body").appendChild(box);
}
