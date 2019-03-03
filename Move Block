//Move Block
let game = new Game();
console.log(game.materials);

game.highlight("air");

let p = new Position(0, 1, 0);
game.setBlock(p, 17);

game.onClick(function() {
  p.x++;
  game.setBlock(new Position(p.x - 1, p.y, p.z), 0);
  game.setBlock(p, 17);
});
