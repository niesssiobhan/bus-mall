'use strict';

//array to store images
var name = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var mallItems = [];
var totalClicks = [];

//make a constructor function
function Item(name, filepath) {
    this.name = name;
    this.filepath = `img/${name}.jpg`
    this.views = 0;
    this.votes = 0;
    mallItems.push(this)
}


// make new Item instances

// for (var i = 0; i < names.length; i++){
//     new Item(names[i]);
// }

new Item('bag', 'img/bag.jpg');
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
var mallImgContainer = document.getElementById('image-container');

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

function randomInt (){
    return Math.floor(Math.random() * mallItems.length); //this makes a random number
}

function makeThreeUnique(){
    console.log(justViewed, 'just viewed inline 50');
    var output = [0];

    var firstNum = randomInt(); //this makes the first
    while(justViewed.includes(firstNum)) { //if yes then re roll the first number
        firstNum = randomInt(); //this makes the first again
    }
    output.push(firstNum);

    output.push(randomInt()); //this makes the second
    while (output[0] === output[1]){
        console.log('duplicate detected');
        output[1] = randomInt();
}
output.push(randomInt()); //this makes the third
while (output[0] === output[2] || output[1] === output[2]){
    console.log('duplicate detected');
    output[2] = randomInt();
}
justViewed = output;
return output ;
}

function displayImg() {
    var img = makeThreeUnique();
    console.log(img, 'three new values in line 69 where we created them after the click');
    mallItems[img[0]].views++;
    mallItems[img[1]].views++;
    mallItems[img[2]].views++;
    mallImg1.src = mallItems[img[0]].filepath;
    mallImg2.src = mallItems[img[1]].filepath;
    mallImg3.src = mallItems[img[2]].filepath;
    mallImg1.alt = mallItems[img[0]].name;
    mallImg2.alt = mallItems[img[1]].name;
    mallImg3.alt = mallItems[img[2]].name;
    mallImg1.title = mallItems[img[0]].name;
    mallImg2.title = mallItems[img[1]].name;
    mallImg3.title = mallItems[img[2]].name;
}

function handleClicks(event) {
    console.log(event.target.alt, 'was clicked');
    if(event.target.id === 'image_containter') {
        return alert ('Please be sure to click on an image');
    }
    totalClicks++;
    console.log(totalClicks, 'total clicks');
    for (var i = 0; i < mallItems.length; i++) {
        if(event.target.alt === mallItems[i].name) {
            mallItems[i].votes++;
        }
    }
    if(totalClicks === 25) {
        containter.removeEventListener('click', handClick);
        return showList();
    }
    displayImg();
}

function showList() {
    for(var i = 0; i < mallItems.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${mallItems[i].name} had ${mallItems[i].views} views and ${mallItems[i].votes} votes`
        productList.appendChild(iEl);
}

// function randomImg (){
//     var randArray = [];
//     randArray[0] = randomInt();
//     var second = randomInt();
// while(second === randArray[0]){
//     second = randomInt();
//     }
//     randArray[1] = second;
//     var third = randomInt();
// while(third === randArray[0] || third === randArray[1]){
//     third = randomInt();
//     }
//     randArray[2] = third;
    
//     console.log(randArray)
   

displayImg();
container.addEventListener('click', handleClick);