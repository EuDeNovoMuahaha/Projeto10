var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrao, laser1, laser2, joia
var gameState

ladrao = createSprite(200, 15, 10, 10)
ladrao.shapeColor = "black"

laser1 = createSprite(100, 200, 200, 5)
laser1.shapeColor = "red"
laser1.velocityY = -3

laser2 = createSprite(300, 200, 200, 5)
laser2.shapeColor = "red"
laser2.velocityY = +3

joia = createSprite(200, 370, 7, 7)
joia.shapeColor = "white"
joia.rotation = 45

function draw() {
background("gray")

createEdgeSprites()
ladrao.collide(edges)
 
if(keyDown(DOWN_ARROW)){
ladrao.y = ladrao.y + 2
}
 
if(keyDown(RIGHT_ARROW)){
ladrao.x = ladrao.x + 2
}
 
if(keyDown(LEFT_ARROW)){
ladrao.x = ladrao.x - 2
}
 
if(keyDown(UP_ARROW)){
ladrao.y = ladrao.y - 2
}
 
if(laser1.y < 101){
laser1.velocityY = +3
}
 
if(laser1.y > 329){
laser1.velocityY = -3
}
 
if(laser2.y < 101){
laser2.velocityY = +3
}
 
if(laser2.y > 329){
laser2.velocityY = -3
}

if(ladrao.isTouching(laser1)){
ladrao.y = 15
ladrao.x = 200
}

if(ladrao.isTouching(laser2)){
ladrao.y = 15
ladrao.x = 200
}

if(ladrao.isTouching(joia)){
stroke(0)
fill(77)
textSize(25)

text("Joia Capturada", 150, 200);
laser1.setVelocity(0,0);
laser2.setVelocity(0,0);
ladrao.setVelocity(0,0);
}

drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
