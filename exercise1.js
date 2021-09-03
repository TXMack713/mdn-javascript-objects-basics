// Object-Oriented JavaScript Chapter 3 Exercises

// Exercise #1
function getRGB(hex) {
  let array = hex.split('');
  array.shift();
  let r = '';
  let g = '';
  let b = '';
  for (let i = 0; i < array.length; i++) {
    if (i < 2) {
      r += array[i];
    } else if (i > 1 && i < 4) {
      g += array[i];
    } else if (i > 3 && i < 6) {
      b += array[i];
    }
  }
  r *= 1;
  g *= 1;
  b *= 1;
  console.log(
    'rgb(' + 0 + 'x' + r + ',' + 0 + 'x' + g + ',' + 0 + 'x' + b + ')'
  );
}
