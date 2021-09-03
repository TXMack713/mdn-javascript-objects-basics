// Object-Oriented JavaScript Chapter 3 Exercises

// Exercise #1
function getRGB(hex) {
  let array = hex.split('');
  array.shift();
  let r = '0x';
  let g = '0x';
  let b = '0x';
  for (let i = 0; i < array.length; i++) {
    if (i < 2) {
      r += array[i];
    } else if (i > 1 && i < 4) {
      g += array[i];
    } else if (i > 3 && i < 6) {
      b += array[i];
    }
  }
  console.log(
    'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ')'
  );
}

getRGB('#00FF00');
getRGB('#efff32');
