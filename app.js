'use strict';

//array to store images
var mallItems = [];

//make a constructor function
function Item(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.views = 0;
    mallItems.push(this)
}

// make new Item instances
new Item('starwars bag', 'img/bag (1).jpg');
new Item('banana', 'img/banana.jpg');
new Item('bathroom', 'img/bathroom.jpg');
new Item('boots', 'img/boots.jpg');
new Item('breakfast', 'img/breakfast.jpg');
new Item('bubblegum', 'img/bubblegum.jpg');
new Item('chair', 'img/chair.jpg');
new Item('cthulhu', 'img/cthulhu.jpg');
new Item('dog duck', 'img/dog-duck.jpg');
new Item('dragon', 'img/dragon.jpg');
new Item('pen', 'img/pen.jpg');
new Item('pet sweep', 'img/pet-sweep.jpg');
new Item('scissors', 'img/scrissors.jpg');
new Item('shark', 'img/shark.jpg');
new Item('sweep', 'img/sweep.jpg');
new Item('tauntaun', 'img/tauntaun.jpg');
new Item('unicorn', 'img/unicorn.jpg');
new Item('usb', 'img/usb.jpg');
new Item('water can', 'img/water-can.jpg');
new Item('wine glass', 'img/wine-glass.jpg');

//get the image element from the DOM
var mallImg = document.getElementById('item-image');

//a function to randomly display one of the images
function randomItem() {

//select a random item from the array of items
var idx = Math.floor(Math.random() * mallItems.length);

//assign the alt, title, and src attributes to the img elements
mallImg.src = mallItems[idx].filepath;
mallImg.alt = mallItems[idx].name;
mallImg.title =mallItems[idx].name;

//tally views for each item
mallItems[idx].views++;
}

randomItem();

//listen for clicks on the new item and then display new item
mallImg.addEventListener('click', randomItem);