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
new Item('scissors', 'img/scissors.jpg');
new Item('shark', 'img/shark.jpg');
new Item('sweep', 'img/sweep.png');
new Item('tauntaun', 'img/tauntaun.jpg');
new Item('unicorn', 'img/unicorn.jpg');
new Item('usb', 'img/usb.gif');
new Item('water can', 'img/water-can.jpg');
new Item('wine glass', 'img/wine-glass.jpg');

//get the image element from the DOM
var mallImgContianer = document.getElementById('image-container');

var mallImg1 = document.getElementById('item-image-1');
var mallImg2 = document.getElementById('item-image-2');
var mallImg3 = document.getElementById('item-image-3');

//why is this commented out but still working?
// a function to randomly display one of the images
// function randomItem(item) {

// //select a random item from the array of items
//     var idx = Math.floor(Math.random() * mallItems.length);

// //assign the alt, title, and src attributes to the img elements
//     item.src = mallItems[idx].filepath;
//     item.alt = mallItems[idx].name;
//     item.title = mallItems[idx].name;

// //tally views for each item
//     mallItems[idx].views++;
// }
// randomItem(mallImg1);
// randomItem(mallImg2);
// randomItem(mallImg3);

// listen for clicks on the new item and then display new item
///////////////////////////////////////////////////////////////////////
mallImgContainer.addEventListener('click', randomImg);

// counter = 0;

//
function randomInd (){
    return Math.floor(Math.random() * mallItems.length);
}
function randomImg (){
    var randArray = [];
    randArray[0] = randomInd();
    var second = randomInd();
while(second === randArray[0]){
    second = randomInd();
    }
    randArray[1] = second;
    var third = randomInd();
while(third === randArray[0] || third === randArray[1]){
    third = randomInd();
    }
    randArray[2] = third;
    
    console.log(randArray)
   
    mallImg1.src = mallItems[randArray[0]].filepath;
    mallImg1.alt = mallItems[randArray[0]].name;
    mallImg1.title = mallItems[randArray[0]].name;
    mallImg2.src = mallItems[randArray[1]].filepath;
    mallImg2.alt = mallItems[randArray[1]].name;
    mallImg2.title = mallItems[randArray[1]].name;
    mallImg3.src = mallItems[randArray[2]].filepath;
    mallImg3.alt = mallItems[randArray[2]].name;
    mallImg3.title = mallItems[randArray[2]].name;
}

randomImg()