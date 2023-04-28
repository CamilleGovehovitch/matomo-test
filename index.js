let clickCount = 0;
let displayClickNumber = document.getElementById('displayClickNumber');
let btn = document.getElementById('btn');

function addClinknumber(display) {
  clickCount++;
  display.innerText = clickCount;
  // displayClickNumber.innerText = clickCount;
}