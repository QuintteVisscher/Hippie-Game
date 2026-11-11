let characterX = 100;
let characterY = 100;
const characterW = 100;
const characterH = 100;
//background
function setup() {
  createCanvas(500, 500);
  background("brightyellow");
}
//floor
function draw() {
  background("beige");
  line(0, 400, 500, 400);

  //character
  fill("pink");
  rect(characterX, characterY, characterW, characterH);

  if (characterY + characterH < 400) {
    characterY = characterY + 1;
    console.log("STOP");
  }

  //platform
  fill("yellow");
  rect(300, 200, 100, 50);
  rect(200, 200, 100, 50);
  rect(400, 200, 100, 50);
}
