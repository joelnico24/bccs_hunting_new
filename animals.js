//set the image for the deerObject
var deer = new Image();
deer.src = "deer.png";

//set the image for the gooseObject
var goose = new Image();
goose.src = "goose.png";

//set the image for the mountainLionObject
var mountainLion = new Image();
mountainLion.src = "mountainlion.png";

//create the deerObject
var deerObject = {
  size: 75,
  x: 0,
  y: 0 - 100,
  imgSizeX: 5,
  imgSizeY: 75,
  speed: 1,
  img: deer
}

//create the gooseObject
var gooseObject = {
  size: 75,
  x: 200,
  y: 0 - 100,
  imgSizeX: 590,
  imgSizeY: 150,
  speed: 1,
  img: goose
}

//create the mountainLionObject
var mountainLionObject = {
  size: 75,
  x: 400,
  y: 0 - 100,
  imgSizeX: 5,
  imgSizeY: 50,
  speed: 1,
  img: mountainLion
}

//draw the animals on the canvas
function drawAnimals() {
  context.beginPath();

  //draw the deerObject on the canvas
  context.drawImage(deerObject.img, deerObject.imgSizeX, deerObject.imgSizeY, 75, 70,
    deerObject.x, deerObject.y, deerObject.size, deerObject.size);

  //draw the gooseObject on the canvas
  context.drawImage(gooseObject.img, gooseObject.imgSizeX, gooseObject.imgSizeY, 780, 780,
    gooseObject.x, gooseObject.y, gooseObject.size, gooseObject.size);

  //draw the mountainLionObject on the canvas
  context.drawImage(mountainLionObject.img, mountainLionObject.imgSizeX, mountainLionObject.imgSizeY, 505, 250,
    mountainLionObject.x, mountainLionObject.y, mountainLionObject.size, mountainLionObject.size);

  //make the deerObject look like it's running
  if (deerObject.imgSizeX == 5) {
    //the setTimeout function is used to slow down the change time btwn each image
    setTimeout(function() {
      deerObject.imgSizeX = 95;
    }, 250);
  } else if (deerObject.imgSizeX == 95) {
    setTimeout(function() {
      deerObject.imgSizeX = 165;
    }, 250);
  } else if (deerObject.imgSizeX == 165) {
    setTimeout(function() {
      deerObject.imgSizeX = 240;
    }, 250);
  } else if (deerObject.imgSizeX == 240) {
    setTimeout(function() {
      deerObject.imgSizeX = 50;
      deerObject.imgSizeY = 147;
    }, 250);
  } else if (deerObject.imgSizeX == 50 && deerObject.imgSizeY == 147) {
    setTimeout(function() {
      deerObject.imgSizeX = 128;
      deerObject.imgSizeY = 147;
    }, 250);
  } else if (deerObject.imgSizeX == 128 && deerObject.imgSizeY == 147) {
    setTimeout(function() {
      deerObject.imgSizeX = 210;
      deerObject.imgSizeY = 147;
    }, 250);
  } else {
    setTimeout(function() {
      deerObject.imgSizeX = 5;
      deerObject.imgSizeY = 75;
    }, 250);
  }

  //make the gooseObject look like it's running
  if (gooseObject.imgSizeX == 590) {
    setTimeout(function() {
      gooseObject.imgSizeX = 1220;
    }, 250);
  } else if (gooseObject.imgSizeX == 1220) {
    setTimeout(function() {
      gooseObject.imgSizeX = 2025;
    }, 250);
  } else if (gooseObject.imgSizeX == 2025) {
    setTimeout(function() {
      gooseObject.imgSizeX = 2950;
    }, 250);
  } else {
    setTimeout(function() {
      gooseObject.imgSizeX = 590;
      gooseObject.imgSizeY = 150;
    }, 250);
  }

  //make the mountainLionObject look like it's running
  if (mountainLionObject.imgSizeX == 5) {
    setTimeout(function() {
      mountainLionObject.imgSizeX = 500;
    }, 250);
  } else if (mountainLionObject.imgSizeX == 500) {
    setTimeout(function() {
      mountainLionObject.imgSizeX = 1000;
    }, 250);
  } else if (mountainLionObject.imgSizeX == 1000) {
    setTimeout(function() {
      mountainLionObject.imgSizeX = 1500;
    }, 250);
  } else {
    setTimeout(function() {
      mountainLionObject.imgSizeX = 5;
      mountainLionObject.imgSizeY = 50;
    }, 250);
  }

  context.closePath();

  //make the objects move down the canvas at the set speed
  deerObject.y += deerObject.speed;
  gooseObject.y += gooseObject.speed;
  mountainLionObject.y += mountainLionObject.speed;
}