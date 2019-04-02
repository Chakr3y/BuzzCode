//Typewriter
let game = new Game();
console.log(game.materials);
game.setPlayerPosition(new Position(0, 1, 5));
game.clearScreen();

var coord = 0;

function type(letter) {
  coord = coord;
  var a = 44;
  var blockMap = [ /*kinda like binary*/
    [a, a, a, a, 0, a, a, 0, a, a, 0, a, a, a, a], //0
    [a, 0, 0, a, 0, 0, a, 0, 0, a, 0, 0, a, 0, 0], //1
    [0, a, 0, a, 0, a, 0, 0, a, 0, a, 0, a, a, a], //2
    [a, a, 0, 0, 0, a, 0, a, 0, 0, 0, a, a, a, 0], //3
    [a, 0, a, a, 0, a, a, a, a, 0, 0, a, 0, 0, a], //4
    [a, a, a, a, 0, 0, a, a, a, 0, 0, a, a, a, a], //5
    [a, a, a, a, 0, 0, a, a, a, a, 0, a, a, a, a], //6
    [a, a, a, 0, 0, a, 0, a, 0, a, 0, 0, a, 0, 0], //7
    [a, a, a, a, 0, a, a, a, a, a, 0, a, a, a, a], //8
    [a, a, a, a, 0, a, a, a, a, 0, 0, a, a, a, a], //9
    [0, a, 0, a, 0, a, a, a, a, a, 0, a, a, 0, a], //A
    [a, a, 0, a, 0, a, a, a, a, a, 0, a, a, a, 0], //B
    [0, a, a, a, 0, 0, a, 0, 0, a, 0, 0, 0, a, a], //C
    [a, a, 0, a, 0, a, a, 0, a, a, 0, a, a, a, 0], //D
    [a, a, a, a, 0, 0, a, a, a, a, 0, 0, a, a, a], //E
    [a, a, a, a, 0, 0, a, a, a, a, 0, 0, a, 0, 0], //F
    [0, a, a, a, 0, 0, a, 0, a, a, 0, a, 0, a, a], //G
    [a, 0, a, a, 0, a, a, a, a, a, 0, a, a, 0, a], //H
    [a, a, a, 0, a, 0, 0, a, 0, 0, a, 0, a, a, a], //I
    [a, a, a, 0, 0, a, 0, 0, a, 0, 0, a, a, a, 0], //J
    [a, 0, a, a, a, 0, a, 0, 0, a, a, 0, a, 0, a], //K
    [a, 0, 0, a, 0, 0, a, 0, 0, a, 0, 0, a, a, a], //L
    [a, 0, a, a, a, a, a, 0, a, a, 0, a, a, 0, a], //M
    [0, 0, 0, a, a, 0, a, 0, a, a, 0, a, a, 0, a], //N
    [0, a, 0, a, 0, a, a, 0, a, a, 0, a, 0, a, 0], //O
    [a, a, 0, a, 0, a, a, a, 0, a, 0, 0, a, 0, 0], //P
    [0, a, a, a, 0, a, 0, a, a, 0, 0, a, 0, 0, a], //Q
    [a, a, 0, a, 0, a, a, a, 0, a, 0, a, a, 0, a], //R
    [0, a, a, a, 0, 0, 0, a, 0, 0, 0, a, a, a, 0], //S
    [a, a, a, 0, a, 0, 0, a, 0, 0, a, 0, 0, a, 0], //T
    [a, 0, a, a, 0, a, a, 0, a, a, 0, a, 0, a, 0], //U
    [a, 0, a, a, 0, a, a, 0, a, a, 0, a, a, a, 0], //V
    [a, 0, a, a, 0, a, a, 0, a, a, a, a, a, 0, a], //W
    [a, 0, a, a, 0, a, 0, a, 0, a, 0, a, a, 0, a], //X
    [a, 0, a, a, 0, a, 0, a, 0, 0, a, 0, 0, a, 0], //Y
    [a, a, a, 0, 0, a, 0, a, 0, a, 0, 0, a, a, a], //Z
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //Space
  ];
  var letterY = [5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1];
  
  for (var i = 0; i < 15; i++) {
    game.setBlock(new Position(coord + i%3, letterY[i], 0), blockMap[letter][i]);
    //console.log("why is this not working");
  }
  
  //console.log("letter: " + letter + " coord: " + coord);
  coord = coord + 4;
};

const charMap = {
  "A": 10,
  "B": 11,
  "C": 12,
  "D": 13,
  "E": 14,
  "F": 15,
  "G": 16,
  "H": 17,
  "I": 18,
  "J": 19,
  "K": 20,
  "L": 21,
  "M": 22,
  "N": 23,
  "O": 24,
  "P": 25,
  "Q": 26,
  "R": 27,
  "S": 28,
  "T": 29,
  "U": 30,
  "V": 31,
  "W": 32,
  "X": 33,
  "Y": 34,
  "Z": 35,
  "Space": 36
};

game.onKeyPress(function(e) {
  console.log(e);
  var char;
  if (e.startsWith("Key") || e.startsWith("Digit") || e.startsWith("Numpad") || e === "Space" || e === "Enter") {
    if (e.startsWith("Key")) {
      char = e.split("Key");
      console.log(char[1]);
    } else if (e.startsWith("Digit")) {
      char = e.split("Digit");
      console.log(char[1]);
    } else if (e.startsWith("Numpad")) {
      char = e.split("Numpad");
      console.log(char[1]);
    } else if (e === "Space") {
      char = [0, e];
    } else if (e === "Enter") {
      game.setPlayerPosition(new Position(coord/2, 1, coord/4 + 10));
    }
    
    if (e.startsWith("Digit")) {
      type(char[1]);
      //console.log("DIGITAL!");
    } else if (e === "Enter") {
      return;
    } else {
      type(charMap[char[1]]);
      //console.log("SOMETHING ELSE!");
    }
  }
});
