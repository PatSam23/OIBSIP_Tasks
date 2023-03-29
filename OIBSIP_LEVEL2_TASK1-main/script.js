const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.value === '=') {
      screen.value = eval(screen.value);
    } else if (e.target.value === 'C') {
      screen.value = '';
    } else {
      screen.value += e.target.value;
    }
  });
});
