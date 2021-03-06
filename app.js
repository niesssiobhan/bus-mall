'use strict';

//array to store images
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var mallItems = []; //this is the main array of objects
var totalClicks = 0; //keeps track of the 25 clicks
var imageChart;

//this is the DOM access
var container = document.getElementById('image-container');
var itemOne = document.getElementById('itemOne');
var itemTwo = document.getElementById('itemTwo');
var itemThree = document.getElementById('itemThree');
var itemsList = document.getElementById('imageList');
var justViewed = [];

//make a constructor function
function Item(name, views, votes) {
    this.name = name;
    this.filepath = `img/${name}.jpg`;
    this.views = views || 0;
    this.votes = votes || 0;
    mallItems.push(this);
}


function checkLocalStorage() {
    if(localStorage.finalResults) {
        var retrieveItems = JSON.parse(localStorage.getItem('finalResults'));
        console.log('retrieved', retrieveItems);
        retrieveItems.forEach(function(productItems) { 
            new Item(productItems.name, productItems.views, productItems.votes)
        });
    } else {
        names.forEach(function(productItems){
            new Item(productItems);
        });
    }
}
checkLocalStorage();

// for (var i = 0; i < names.length; i++){
//     new Item(names[i]);
// }

function randomInt (){
    return Math.floor(Math.random() * mallItems.length); //this makes a random number
}

function makeThreeUnique() {
    // console.log(justViewed, 'just viewed inline 50');
    var output = [];

    var firstNum = randomInt(); //this makes the first
    while(justViewed.includes(firstNum)) { //if yes then re roll the first number
        firstNum = randomInt(); //this makes the first again
    }
    output.push(firstNum);

    var secondNum = randomInt(); //this makes the second
    while (justViewed.includes(secondNum) || output[0] === secondNum) {
        // console.log('duplicate detected on second');
        secondNum = randomInt(); //this makes the second again
    }
    output.push(secondNum);

    var thirdNum = randomInt(); //this makes the third
    while (justViewed.includes(thirdNum) || output[0] === thirdNum || output[1] === thirdNum) {
        // console.log('duplicate detected on third');
        thirdNum = randomInt(); //this makes the third again
    }
output.push(thirdNum);

justViewed = output;
return output ;
}

function displayImg() {
    var img = makeThreeUnique();
    // console.log(img, 'three new values in line 69 where we created them after the click');
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
    // console.log(event.target.alt, 'was clicked');
    if(event.target.id === 'image_containter') {
        return alert ('Please be sure to click on an image');
    }
    totalClicks++;
    // console.log(totalClicks, 'total clicks');
    for (var i = 0; i < mallItems.length; i++) {
        if(event.target.alt === mallItems[i].name) {
            mallItems[i].votes++;
        }
    }
    if(totalClicks === 25) {
        container.removeEventListener('click', handleClick);
        // showList();
        updateChartArrays();
        drawChart();
        localStorage.setItem('finalResults', JSON.stringify(mallItems));
        return 
    }
    displayImg();
}

// function showList() {
//     for(var i = 0; i < mallItems.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = `${mallItems[i].name} had ${mallItems[i].views} and views and ${mallItems[i].votes} votes`;
//         itemsList.appendChild(liEl);
//     }
// }

displayImg();
container.addEventListener('click', handleClick);

var votes = [];

//this is where I build my chart
function updateChartArrays() {
  container = document.getElementById('image-container').hidden = true;
    for (var i = 0; i < mallItems.length; i++) {
        votes[i] = mallItems[i].votes;
    }
}

var data = {
    labels: names, 
    datasets: [
      {
        label: 'Your Voting Results',
        data: votes, 
        backgroundColor: [
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red'
        ],
        hoverBackgroundColor: [
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
         'green',
        ],
        fontColor: 'black',
        fontSize: 15,
      }]
  };

  var ctx = document.getElementById('bar-chart').getContext('2d');
  function drawChart() {
    imageChart = new Chart(ctx,{
      type: 'bar',
      data: data,
        options: {
        responsive: false,
        animation: {
          duration: 1000,
          easing: 'easeInCubic'
        }
      },
      options: { 
        legend: {
            labels: {
                fontColor: "black",
                fontSize: 15
            }
        },
      scales: {
        yAxes: [{
          ticks: {
              fontColor: "black",
          }
        }],
        xAxes: [{
            ticks: {
                fontColor: "black",
      }
    }]
}
      }
    });
}
