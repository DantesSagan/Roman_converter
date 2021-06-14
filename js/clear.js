let clearButton = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let spans = document.querySelectorAll('span');

clearButton.addEventListener('click', () => {
  inputs.forEach((input) => (input.value = ''));
});
clearButton.addEventListener('click', () => {
  spans.forEach((span) => (span.value = ''));
});
function myFunction() {
  document.getElementById('arabicNumber').focus();
}