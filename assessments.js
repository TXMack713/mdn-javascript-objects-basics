// MDN JavaScript Objects Basics Assessmnet 1
let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function() {
    console.log('Meow!');
  }
};

// Put your code here
let catName;
catName = cat['name'];
cat.greeting();
cat.color = 'black';

// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;

section.appendChild(para1);
section.appendChild(para2);

// MDN JavaScript Objects Basics Assessment 2
let bandInfo;

// Add your code here
bandInfo = {
  name: 'Mercy Me',
  nationality: 'USA',
  genre: 'Christian',
  members: '4',
  formed: ' 1996',
  split: 'false',
  albums: [{ name: '', released: '' }]
};

// Don't edit the code below here!

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);

// MDN JavaScript Objects Basics Assessment 3
let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function() {
    console.log('Meow!');
  }
};
