// MDN JavaScript Objects Basics Assessmnet 1
function assessment1() {
  const section = document.querySelector('.assessment1');

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
}

assessment1();

// MDN JavaScript Objects Basics Assessment 2
function assessment2() {
  let bandInfo;

  // Add your code here
  bandInfo = {
    name: 'Mercy Me',
    nationality: 'USA',
    genre: 'Christian',
    members: '4',
    formed: ' 1996',
    split: 'false',
    albums: [
      { name: 'Undone', released: '2004' },
      { name: 'Welcome to the new', released: '2014' }
    ]
  };

  let para1 = document.createElement('p');
  para1.textContent = `${bandInfo.name} is a ${bandInfo.genre} group from the ${
    bandInfo.nationality
  } that was formed in ${bandInfo.formed}. Their latest album ${
    bandInfo.albums[1].name
  } was released in ${bandInfo.albums[1].released}.`;

  // Don't edit the code below here!

  const section = document.querySelector('section');
  let para1 = document.createElement('p');
  para1.textContent = bandInfo;
  section.appendChild(para1);
}

assessment2();

// MDN JavaScript Objects Basics Assessment 3
function assessment3() {
  let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function() {
      console.log('Meow!');
    }
  };

  const section = document.querySelector('.assessment3');

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

  para1.textContent = `The cat's name is ${this.catName}.`;
  para2.textContent = `The cat's color is ${this.cat.color}.`;

  section.appendChild(para1);
  section.appendChild(para2);
}
