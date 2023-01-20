import kaboom from "https://unpkg.com/kaboom@2000.1.0/dist/kaboom.mjs";

export const k = kaboom({
  canvas: document.getElementById("game"),
  background: [0, 0, 0],
  width: 800,
  height: 600,
  crisp: true,
});

export const gameConfig = {
  tileWidth: 16,
  tileHeight: 16,
};

loadSprite("splashScreen", "./sprites/splashScreen.png");
loadSprite("gameOverScreen", "./sprites/gameOverScreen.png");
loadSprite("winScreen", "./sprites/winScreen.png");

loadSprite("intro1", "./sprites/intro1.png");
loadSprite("intro2", "./sprites/intro2.png");
loadSprite("intro3", "./sprites/intro3.png");
loadSprite("intro4", "./sprites/intro4.png");
loadSprite("intro5", "./sprites/intro5.png");
loadSprite("intro6", "./sprites/intro6.png");

loadSprite("fish", "./sprites/fish.png");
loadSpriteAtlas("./sprites/ssFantasy.png", "./fantasySpriteAtlas.json");
loadSpriteAtlas("./sprites/tmDungeon.png", "./tilemap.json");
loadSpriteAtlas("./sprites/ssTilemapV2.png", "./tilemapV2.json");
loadSpriteAtlas("./sprites/ssChars.png", "./ssChars.json");

loadSound("grow", "./sounds/grow1.wav");
loadSound("explode", "./sounds/explode1.wav");
loadSound("bgm", "./sounds/abstractionDeepBlue.wav");
loadSound("introMusic", "./sounds/abstractionSanctuary.wav");
loadSound("lose", "./sounds/lose.wav");
loadSound("hit", "./sounds/hit1.wav");
loadSound("heal", "./sounds/threeTone2.ogg");
loadSound("meow", "./sounds/meow.wav");
loadSound("footsteps", "./sounds/footstepV2.wav");
loadSound("eliteMeow", "./sounds/eliteMeow.wav");
loadSound("bossMeow", "./sounds/bossMeow.wav");
loadSound("bossDie", "./sounds/bossDie.wav");
loadSound("win", "./sounds/win8.wav");
