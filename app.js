'use strict';

//array to store images
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var mallItems = []; //this is the main array of objects
var totalClicks = 0; //keeps track of the 25 clicks

//this is the DOM access
var container = document.getElementById('image-container');
var itemOne = document.getElementById('itemOne');
var itemTwo = document.getElementById('itemTwo');
var itemThree = document.getElementById('itemThree');
var itemsList = document.getElementById('imagelist');
var justViewed = [];

//make a constructor function
function Item(name) {
    this.name = name;
    this.filepath = `img/${name}.jpg`;
    this.views = 0;
    this.votes = 0;
    mallItems.push(this);
}

for (var i = 0; i < names.length; i++){
    new Item(names[i]);
}

function randomInt (){
    return Math.floor(Math.random() * mallItems.length); //this makes a random number
}

function makeThreeUnique() {
    console.log(justViewed, 'just viewed inline 50');
    var output = [];

    var firstNum = randomInt(); //this makes the first
    while(justViewed.includes(firstNum)) { //if yes then re roll the first number
        firstNum = randomInt(); //this makes the first again
    }
    output.push(firstNum);

    output.push(randomInt()); //this makes the second
    while (output[0] === output[1]) {
        console.log('duplicate detected on second');
        output[1] = randomInt();
}
output.push(randomInt()); //this makes the third
while (output[0] === output[2] || output[1] === output[2]) {
    console.log('duplicate detected on third');
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
    itemOne.src = mallItems[img[0]].filepath;
    itemTwo.src = mallItems[img[1]].filepath;
    itemThree.src = mallItems[img[2]].filepath;
    itemOne.alt = mallItems[img[0]].name;
    itemTwo.alt = mallItems[img[1]].name;
    itemThree.alt = mallItems[img[2]].name;
    itemOne.title = mallItems[img[0]].name;
    itemTwo.title = mallItems[img[1]].name;
    itemThree.title = mallItems[img[2]].name;
}

function handleClick(event) {
    console.log(event.target.alt, 'was clicked');
    if(event.target.id === 'image_containter') {
        return alert ('Please be sure to click on an image');
    }
    totalClicks++;
    console.log(totalClick, 'total clicks');
    for (var i = 0; i < mallItems.length; i++) {
        if(event.target.alt === mallItems[i].name) {
            mallItems[i].votes++;
        }
    }
    if(totalClicks === 25) {
        container.removeEventListener('click', handleClick);
        return showList();
    }
    displayImg();
}

function showList() {
    for(var i = 0; i < mallItems.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${mallItems[i].name} had ${mallItems[i].views} and views and ${mallItems[i].votes} votes`;
        itemsList.appendChild(liEl);
    }
}

displayImg();
container.removeEventListener('click', handleClick);