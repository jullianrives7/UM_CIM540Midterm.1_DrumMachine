var instructions = ["Start by selecting a drum kit preset from the menu at the top left.", "Each gray trigger pad/area will trigger a sound on click from the active drum kit preset.", "The 'Rock Drum Kit' preset is currently active.", "The 'NeoSoul Drum Kit' preset is currently active."]

var imageArray = [];

var backGroundColor = "red";
var drumMachineColor = "black";
var hiHatOpenPadX = 65;
var hiHatOpenPadY = 70;
var crashPadX = 155;
var crashPadY = 70;
var hiTomPadX = 245;
var hiTomPadY = 70;
var ridePadX = 335;
var ridePadY = 70;
var hiHatClosedPadX = 65;
var hiHatClosedPadY = 160;
var snarePadX = 155;
var snarePadY = 160;
var kickPadX = 245;
var kickPadY = 160;
var lowTomPadX = 335;
var lowTomPadY = 160;
var rectPadSize = 90;

var rock_HiHatOpenSound;
var rock_CrashSound;
var rock_HiTomSound;
var rock_RideSound;
var rock_HiHatClosedSound;
var rock_SnareSound;
var rock_KickSound;
var rock_LowTomSound;

var neosoul_HiHatOpenSound;
var neosoul_CrashSound;
var neosoul_HiTomSound;
var neosoul_RideSound;
var neosoul_HiHatClosedSound;
var neosoul_SnareSound;
var neosoul_KickSound;
var neosoul_LowTomSound;

var drumKitSelect;
var drumKitType= "";

function preload() {
  imageArray[0] =
  loadImage("assets/images/bam.png");
  imageArray[1] =
  loadImage("assets/images/81.jpg");
  imageArray[2] =
  loadImage("assets/images/mandalabg.png");

  soundFormats('mp3', 'ogg');
  rock_HiHatOpenSound = loadSound('assets/Rock_HiHatOpen.mp3');
  rock_CrashSound = loadSound('assets/Rock_Crash.mp3');
  rock_HiTomSound = loadSound('assets/Rock_HiTom.mp3');
  rock_RideSound = loadSound('assets/Rock_Ride.mp3');
  rock_HiHatClosedSound = loadSound('assets/Rock_HiHatClosed.mp3');
  rock_SnareSound = loadSound('assets/Rock_Snare.mp3');
  rock_KickSound = loadSound('assets/Rock_Kick.mp3');
  rock_LowTomSound = loadSound('assets/Rock_LowTom.mp3');

  neosoul_HiHatOpenSound = loadSound('assets/neosoul_HiHatOpen.mp3');
  neosoul_CrashSound = loadSound('assets/neosoul_Crash.mp3');
  neosoul_HiTomSound = loadSound('assets/neosoul_HiTom.mp3');
  neosoul_RideSound = loadSound('assets/neosoul_Ride.mp3');
  neosoul_HiHatClosedSound = loadSound('assets/neosoul_HiHatClosed.mp3');
  neosoul_SnareSound = loadSound('assets/neosoul_Snare.mp3');
  neosoul_KickSound = loadSound('assets/neosoul_Kick.mp3');
  neosoul_LowTomSound = loadSound('assets/neosoul_LowTom.mp3');

}

function setup() {
  // put setup code here

  createCanvas(500,500);
  background(imageArray[2],400,300);

  drumKitSelect = createSelect();
  //drop down menu
  drumKitSelect.position(10,10);
  drumKitSelect.option("(Select Your Preset)");
  drumKitSelect.option("Rock Kit");
  drumKitSelect.option("NeoSoul Kit");
  drumKitSelect.changed(function(){
    drumKitType = drumKitSelect.value();
  })

  //instructions
  text(instructions[0],80,43,stroke(5));
  text(instructions[1],25,358,stroke(5));
}

function draw() {
  // put drawing code here
  fill("black");
  rect(45,45,400,300);
  image(imageArray[0],65,250, 90,90);
  image(imageArray[1],160,250, 275,85);

  // black background box^^

  if(drumKitType == "Rock Kit")
  {
    text(instructions[2],65,65,fill(255));
  }
    else if(drumKitType == "NeoSoul Kit")
    {
      text(instructions[3],65,65,fill(255));
    }
///////////////Top 4 Gray Pads/////////////

  fill(70, 66, 68);
  rect(65,70,90,90);
  text("Hi-Hat (Open)",70,85, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > hiHatOpenPadX && mouseX < hiHatOpenPadX + rectPadSize && mouseY > hiHatOpenPadY && mouseY < hiHatOpenPadY + rectPadSize && mouseIsPressed == true) {
    if (rock_HiHatOpenSound.isPlaying() == false){
      rock_HiHatOpenSound.setVolume(.7);
      rock_HiHatOpenSound.play();
      rock_HiHatOpenSound.rate(1);}
    }
      else if(drumKitType == "NeoSoul Kit" && mouseX > hiHatOpenPadX && mouseX < hiHatOpenPadX + rectPadSize && mouseY > hiHatOpenPadY && mouseY < hiHatOpenPadY + rectPadSize && mouseIsPressed == true){
        if (neosoul_HiHatOpenSound.isPlaying() == false){
          neosoul_HiHatOpenSound.setVolume(.7);
          neosoul_HiHatOpenSound.play();
          neosoul_HiHatOpenSound.rate(1);}
    }
        else if(drumKitType == "(Select Your Preset)" && mouseX > hiHatOpenPadX && mouseX < hiHatOpenPadX + rectPadSize && mouseY > hiHatOpenPadY && mouseY < hiHatOpenPadY + rectPadSize && mouseIsPressed == true){
          neosoul_HiHatOpenSound.setVolume(0.0);
          rock_HiHatOpenSound.setVolume(0.0);
        }

  /////top-left pad (HiHat Open)^^^

  fill(70, 66, 68);
  rect(155,70,90,90);
  text("Crash",162,85, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > crashPadX && mouseX < crashPadX + rectPadSize && mouseY > crashPadY && mouseY < crashPadY + rectPadSize && mouseIsPressed == true) {
    if (rock_CrashSound.isPlaying() == false){
      rock_CrashSound.setVolume(.3);
      rock_CrashSound.play();
      rock_CrashSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > crashPadX && mouseX < crashPadX + rectPadSize && mouseY > crashPadY && mouseY < crashPadY + rectPadSize && mouseIsPressed == true){
        if (neosoul_CrashSound.isPlaying() == false){
          neosoul_CrashSound.setVolume(.5);
          neosoul_CrashSound.play();
          neosoul_CrashSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > crashPadX && mouseX < crashPadX + rectPadSize && mouseY > crashPadY && mouseY < crashPadY + rectPadSize && mouseIsPressed == true){
          neosoul_CrashSound.setVolume(0.0);
          rock_CrashSound.setVolume(0.0);
        }
  /////2nd pad from left (top row- Crash)^^^


  fill(70, 66, 68);
  rect(245,70,90,90);
  text("Hi-Tom",252,85, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > hiTomPadX && mouseX < hiTomPadX + rectPadSize && mouseY > hiTomPadY && mouseY < hiTomPadY + rectPadSize && mouseIsPressed == true) {
    if (rock_HiTomSound.isPlaying() == false){
      rock_HiTomSound.setVolume(.7);
      rock_HiTomSound.play();
      rock_HiTomSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > hiTomPadX && mouseX < hiTomPadX + rectPadSize && mouseY > hiTomPadY && mouseY < hiTomPadY + rectPadSize && mouseIsPressed == true){
        if (neosoul_HiTomSound.isPlaying() == false){
          neosoul_HiTomSound.setVolume(.7);
          neosoul_HiTomSound.play();
          neosoul_HiTomSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > hiTomPadX && mouseX < hiTomPadX + rectPadSize && mouseY > hiTomPadY && mouseY < hiTomPadY + rectPadSize && mouseIsPressed == true){
          neosoul_HiTomSound.setVolume(0.0);
          rock_HiTomSound.setVolume(0.0);
        }
  /////3rd pad from left (top row- HiTom)^^^


  fill(70, 66, 68);
  rect(335,70,90,90);
  text("Ride",342,85, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > ridePadX && mouseX < ridePadX + rectPadSize && mouseY > ridePadY && mouseY < ridePadY + rectPadSize && mouseIsPressed == true) {
    if (rock_RideSound.isPlaying() == false){
      rock_RideSound.setVolume(.7);
      rock_RideSound.play();
      rock_RideSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > ridePadX && mouseX < ridePadX + rectPadSize && mouseY > ridePadY && mouseY < ridePadY + rectPadSize && mouseIsPressed == true){
        if (neosoul_RideSound.isPlaying() == false){
          neosoul_RideSound.setVolume(.7);
          neosoul_RideSound.play();
          neosoul_RideSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > ridePadX && mouseX < ridePadX + rectPadSize && mouseY > ridePadY && mouseY < ridePadY + rectPadSize && mouseIsPressed == true){
          neosoul_RideSound.setVolume(0.0);
          rock_RideSound.setVolume(0.0);
        }
  //4th pad from left (top row-Ride)^^^




///////////////Bottom 4 Gray Pads/////////////

  fill(70, 66, 68);
  rect(65,160,90,90);
  text("Hi-Hat (Closed)",70,175, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > hiHatClosedPadX && mouseX < hiHatClosedPadX + rectPadSize && mouseY > hiHatClosedPadY && mouseY < hiHatClosedPadY + rectPadSize && mouseIsPressed == true) {
    if (rock_HiHatClosedSound.isPlaying() == false){
      rock_HiHatClosedSound.setVolume(.7);
      rock_HiHatClosedSound.play();
      rock_HiHatClosedSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > hiHatClosedPadX && mouseX < hiHatClosedPadX + rectPadSize && mouseY > hiHatClosedPadY && mouseY < hiHatClosedPadY + rectPadSize && mouseIsPressed == true) {
        if (neosoul_HiHatClosedSound.isPlaying() == false){
          neosoul_HiHatClosedSound.setVolume(.7);
          neosoul_HiHatClosedSound.play();
          neosoul_HiHatClosedSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > hiHatClosedPadX && mouseX < hiHatClosedPadX + rectPadSize && mouseY > hiHatClosedPadY && mouseY < hiHatClosedPadY + rectPadSize && mouseIsPressed == true) {
          neosoul_HiHatClosedSound.setVolume(0.0);
          rock_HiHatClosedSound.setVolume(0.0);
        }
  /////bottom-left pad (HiHatClosed)^^^


  fill(70, 66, 68);
  rect(155,160,90,90);
  text("Snare",162,175, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > snarePadX && mouseX < snarePadX + rectPadSize && mouseY > snarePadY && mouseY < snarePadY + rectPadSize && mouseIsPressed == true) {
    if (rock_SnareSound.isPlaying() == false){
      rock_SnareSound.setVolume(.8);
      rock_SnareSound.play();
      rock_SnareSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > snarePadX && mouseX < snarePadX + rectPadSize && mouseY > snarePadY && mouseY < snarePadY + rectPadSize && mouseIsPressed == true) {
        if (neosoul_SnareSound.isPlaying() == false){
          neosoul_SnareSound.setVolume(.7);
          neosoul_SnareSound.play();
          neosoul_SnareSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > snarePadX && mouseX < snarePadX + rectPadSize && mouseY > snarePadY && mouseY < snarePadY + rectPadSize && mouseIsPressed == true) {
          neosoul_SnareSound.setVolume(0.0);
          rock_SnareSound.setVolume(0.0);
        }
  /////2nd pad from left (bottom row-Snare)^^^


  fill(70, 66, 68);
  rect(245,160,90,90);
  text("Kick",252,175, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > kickPadX && mouseX < kickPadX + rectPadSize && mouseY > kickPadY && mouseY < kickPadY + rectPadSize && mouseIsPressed == true) {
    if (rock_KickSound.isPlaying() == false){
      rock_KickSound.setVolume(1);
      rock_KickSound.play();
      rock_KickSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > kickPadX && mouseX < kickPadX + rectPadSize && mouseY > kickPadY && mouseY < kickPadY + rectPadSize && mouseIsPressed == true) {
        if (neosoul_KickSound.isPlaying() == false){
          neosoul_KickSound.setVolume(1);
          neosoul_KickSound.play();
          neosoul_KickSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > kickPadX && mouseX < kickPadX + rectPadSize && mouseY > kickPadY && mouseY < kickPadY + rectPadSize && mouseIsPressed == true) {
          neosoul_KickSound.setVolume(0.0);
          rock_KickSound.setVolume(0.0);
        }
  /////3rd pad from left (bottom row- Kick)^^^


  fill(70, 66, 68);
  rect(335,160,90,90);
  text("Low Tom",342,175, fill(255));

  if(drumKitType == "Rock Kit" && mouseX > lowTomPadX && mouseX < lowTomPadX + rectPadSize && mouseY > lowTomPadY && mouseY < lowTomPadY + rectPadSize && mouseIsPressed == true) {
    if (rock_LowTomSound.isPlaying() == false){
      rock_LowTomSound.setVolume(1);
      rock_LowTomSound.play();
      rock_LowTomSound.rate(1);}
  }
      else if(drumKitType == "NeoSoul Kit" && mouseX > lowTomPadX && mouseX < lowTomPadX + rectPadSize && mouseY > lowTomPadY && mouseY < lowTomPadY + rectPadSize && mouseIsPressed == true) {
        if (neosoul_LowTomSound.isPlaying() == false){
          neosoul_LowTomSound.setVolume(1);
          neosoul_LowTomSound.play();
          neosoul_LowTomSound.rate(1);}
      }
        else if(drumKitType == "(Select Your Preset)" && mouseX > lowTomPadX && mouseX < lowTomPadX + rectPadSize && mouseY > lowTomPadY && mouseY < lowTomPadY + rectPadSize && mouseIsPressed == true) {
          neosoul_LowTomSound.setVolume(0.0);
          rock_LowTomSound.setVolume(0.0);
        }
  /////4th pad from left (bottom row- Floor Tom)^^^




}
