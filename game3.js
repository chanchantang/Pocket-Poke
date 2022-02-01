let drawingSurface = document.getElementById('drawingSurface');
let ctx = drawingSurface.getContext("2d");
//768px 576px

let fieldBG = new Image();
fieldBG.src = "battlebg.png";
let pickBG = new Image();
pickBG.src = "battle.png";
let selectBG = new Image();
selectBG.src = "select.png";
let victoryPic = new Image();
victoryPic.src = "victory.jpg"
let defeatPic = new Image();
defeatPic.src = "defeat.png"

let bgMusic = new Audio();
bgMusic.src = "music.mp3"
let selectMusic = new Audio();
selectMusic.src = "select.mp3"
let victoryMusic = new Audio();
victoryMusic.src = "victory.mp3"
let defeatMusic = new Audio();
defeatMusic.src = "defeat.mp3"


let pikachuPic = new Image();
pikachuPic.src = "pikachu.png";
let charizardPic = new Image();
charizardPic.src = "charizard.png";
let blastoisePic = new Image();
blastoisePic.src = "blastoise.png";
let venusaurPic = new Image();
venusaurPic.src = "venusaur.png";


function drawPoke(){
  if(myPoke == pikachu){
    let pic = ctx.drawImage(pikachuPic,0,0,420,420,100,246,250,250);
    return pic;
  }
  if(myPoke == blastoise){
    let pic = ctx.drawImage(blastoisePic,0,0,420,420,100,247,250,250);
    return pic;
  }
  if(myPoke == venusaur){
    let pic = ctx.drawImage(venusaurPic,0,0,420,420,100,246,300,250);
    return pic;
  }
  if(myPoke == charizard){
    let pic = ctx.drawImage(charizardPic,0,0,420,420,100,235,250,250);
    return pic;
  }
}


let pidgeotPic = new Image();
pidgeotPic.src = "pidgeot.png";
let arcaninePic = new Image();
arcaninePic.src = "arcanine.png";
let gyaradosPic = new Image();
gyaradosPic.src = "gyarados.png";
let rhydonPic = new Image();
rhydonPic.src = "rhydon.png";


function showPoke(){
  if(enemy == pidgeot){
    let pic = ctx.drawImage(pidgeotPic,0,0,600,600,420,0,270,270);
    return pic;
  }
  if(enemy == arcanine){
    let pic = ctx.drawImage(arcaninePic,0,0,770,730,430,40,250,250);
    return pic;
  }
  if(enemy == gyarados){
    let pic = ctx.drawImage(gyaradosPic,0,0,256,256,420,40,260,260);
    return pic;
  }
  if(enemy == rhydon){
    let pic = ctx.drawImage(rhydonPic,0,0,231,213,420,27,260,260);
    return pic;
  }
}

function enemyHp(){
  ctx.font = "30px Verdana";
  ctx.fillStyle = "red"
  if (enemy.hp>0){
    ctx.fillText(enemy.name + "'s HP: " + enemy.hp,50,50);
  }
  else{
    ctx.fillText(enemy.name + "'s HP: " + "0",50,50);
  }
}

function myHp(){
  ctx.font = "30px Verdana";
  ctx.fillStyle = "red"
  if (myPoke.hp>0){
    ctx.fillText(myPoke.name + "'s HP: " + myPoke.hp,450,450);
  }
  else{
    ctx.fillText(myPoke.name + "'s HP: " + "0",450,450);
  }
}

function draw(){
  bgMusic.play();
  ctx.drawImage(fieldBG,0,0,512,288,0,0,768,466);
  ctx.drawImage(pickBG,0,113,240,160,0,466,768,400);
  drawPoke();
  showPoke();
  moveText();
  enemyHp();
  myHp();
}

btn2.onclick = draw

function Pokemon(name, type, weak, health, attack, defence, speed, m1, m2, m3, m4){
  this.name = name;
  this.type = type;
  this.weak = weak;
  this.hp = health;
  this.atk = attack;
  this.def = defence;
  this.spd = speed;
  this.m1 = m1;
  this.m2 = m2;
  this.m3 = m3;
  this.m4 = m4;
}

function Moveset(name, power, type, accuracy, myAtk, myDef, mySpd, uAtk, uDef, uSpd){
  this.name = name;
  this.power = power;
  this.type = type;
  this.acc = accuracy;
  this.myAtk = myAtk;
  this.myDef = myDef;
  this.mySpd = mySpd;
  this.uAtk = uAtk;
  this.uDef = uDef;
  this.uSpd = uSpd;
}

let voltTackle = new Moveset("Volt Tackle", 120, "Electric", 100, 0, 0, 0, 0, 0, 0);
let quickAttack = new Moveset("Quick Attack", 40, "Normal", 100, 0, 0, 0, 0, 0, 0);
let ironTail = new Moveset("Iron Tail", 100, "Steel", 75, 0, 0, 0, 0, 0, 0);
let thunderBolt = new Moveset("Thunderbolt", 90, "Electric", 100, 0, 0, 0, 0, 0, 0);
let pikachuMoves = [voltTackle, quickAttack, ironTail, thunderBolt];

function thunderAni(){
  var cycle = 0;
  let litW = 128;
  let litH = 512;
  thunderMusic.play()
  let lightningAni = setInterval( function(){
    ctx.clearRect(0, 0, litW, litH);
    draw();
    ctx.drawImage(lightningPic, cycle*litW, 0, litW, litH, 480, 0, 128, 350);
    cycle = (cycle + 1) % 9;
    if(cycle == 0){
      clearInterval(lightningAni)
    }
  }, 120);
}

let thunderMusic = new Audio();
thunderMusic.src = "thunder.mp3"
let lightningPic = new Image();
lightningPic.src = "lightning.png"

function thunderMusics(){
  thunderMusic.play()
}

let blastBurn = new Moveset("Blast Burn", 150, "Fire", 90, 0, 0, 0, 0, 0, 0);
let flareBlitz = new Moveset("Flare Blitz", 120, "Fire", 100, 0, 0, 0, 0, 0, 0);
let airSlash = new Moveset("Air Slash", 75, "Flying", 95, 0, 0, 0, 0, 0, 0);
let dragonPulse = new Moveset("Dragon Pulse", 85, "Dragon", 100, 0, 0, 0, 0, 0, 0);
let charizardMoves = [blastBurn, flareBlitz, airSlash, dragonPulse]

let hydroCannon = new Moveset("Hydro Cannon", 150, "Water", 90, 0, 0, 0, 0, 0, 0)
let blizzard = new Moveset("Blizzard", 110, "Ice", 70, 0, 0, 0, 0, 0, 0)
let flashCannon = new Moveset("Flash Cannon", 80, "Steel", 100, 0, 0, 0, 0, 0)
let focusBlast = new Moveset("Focus Blast", 120, "Fighting", 70, 0, 0, 0, 0, 0, 0)
let blastoiseMoves = [hydroCannon, blizzard, flashCannon, focusBlast]

let frenzyPlant = new Moveset("Frenzy Plant", 150, "Grass", 90, 0, 0, 0, 0, 0, 0)
let gigaDrain = new Moveset("Giga Drain", 75, "Grass", 100, 0, 0, 0, 0, 0, 0)
let sludgeBomb = new Moveset("Sludge Bomb", 90, "Poison", 100, 0, 0, 0, 0, 0, 0)
let solarBeam = new Moveset("Solar Beam", 120, "Grass", 100, 0, 0, 0, 0, 0, 0)
let venusaurMoves = [frenzyPlant, gigaDrain, sludgeBomb, solarBeam]


let aerialAce = new Moveset("Aerial Ace", 60, "Flying", 10000, 0, 0, 0, 0, 0, 0);
let featherDance = new Moveset("Feather Fance", 50, "Flying", 100, 0, 0, 0, 20, 0, 0);
let sandAttack = new Moveset("Sand Attack", 50, "Ground", 100, 0, 0, 0, 0, 0, 10);
let whirlwind = new Moveset("Air Slash", 75, "Flying", 95, 0, 0, 0, 0, 0, 0);
let pidgeotMoves = [aerialAce, featherDance, sandAttack, whirlwind];

let extremeSpeed = new Moveset("Extreme Speed", 80, "Normal", 100, 0, 0, 0, 0, 0, 0);
let flameThrower = new Moveset("Flamethrower", 90, "Fire", 100, 0, 0, 0, 0, 0, 0);
let arcanineMoves = [extremeSpeed, flameThrower, aerialAce, ironTail]

let hydroPump = new Moveset("Hydro Pump", 110, "Water", 80, 0, 0, 0, 0, 0, 0);
let dragonDance = new Moveset("Dragon Dance", 90, "Dragon", 0, 0, 0, 0, 0, 0, 0);
let earthquake = new Moveset("Earthquake", 100, "Ground", 100, 0, 0, 0, 0, 0, 0);
let hyperBeam = new Moveset("Hyper Beam", 150, "Normal", 90, 0, 0, 0, 0, 0, 0);
let gyaradosMoves = [hydroPump, dragonDance, earthquake, hyperBeam]

let megahorn = new Moveset("Megahorn", 120, "Bug", 85, 0, 0, 0, 0, 0, 0);
let stoneEdge = new Moveset("Stone Edge", 100, "Rock", 80, 0, 0, 0, 0, 0, 0);
let thunderFang = new Moveset("Thunder Fang", 65, "Electric", 95, 0, 0, 0, 0, 0, 0);
let rhydonMoves = [megahorn, stoneEdge, thunderFang, earthquake]



let pikachu = new Pokemon("Pikachu", "Electric", "Grass", 175, 55, 40, 90, "Volt Tackle", "Quick Attack", "Iron Tail", "Thunderbolt")
let charizard = new Pokemon("Charizard", "Fire", "Water", 390, 84, 78, 100, "Blast Burn", "Flare Blitz", "Air Slash", "Dragon Pulse")
let blastoise = new Pokemon("Blastoise", "Water", "Electric", 395, 83, 100, 78, "Hydro Cannon", "Blizzard", "Flash Cannon", "Focus Blast")
let venusaur = new Pokemon("Venusaur", "Grass","Fire", 400, 82, 83, 100, "Frenzy Plant","Giga Drain", "Sludge Bomb","Solar Beam")
let myPokemon = [pikachu, charizard, blastoise, venusaur];


let pidgeot = new Pokemon("Pidgeot", "Flying", "Electric", 415, 80, 75, 101, "Aerial Ace","Feather Dance","Sand-Attack","Whirlwind")
let arcanine = new Pokemon("Arcanine", "Fire", "Water", 450, 110, 80, 95, "Extreme Speed","Flamethrower","Aerial Ace","Iron Tail")
let gyarados = new Pokemon("Gyarados", "Water", "Electric", 475, 125, 79, 81, "Hydro Pump","Dragon Dance","Earthquake","Hyper Beam")
let rhydon = new Pokemon("Rhydon", "Ground", "Water", 525, 130, 120, 40, "Megahorn","Stone Edge","Thunder Fang","Earthquake")
let enemyPokemon = [pidgeot, arcanine, gyarados, rhydon]


let myPoke = pikachu
let myMoves = pikachuMoves
let enemy = pidgeot
let enemyMoves = pidgeotMoves
let myAni = thunderAni
let attackSong = thunderMusics
let enemyAttackSong = thunderMusics

function moveText(){
  document.getElementById('drawingSurface').addEventListener("click", attack)
  ctx.font = "22px Verdana";
  ctx.fillStyle = "black"
  ctx.fillText(myPoke.m1,45,515)
  ctx.font = "22px Verdana";
  ctx.fillStyle = "black"
  ctx.fillText(myPoke.m3,230,515)
  ctx.font = "22px Verdana";
  ctx.fillStyle = "black"
  ctx.fillText(myPoke.m2,45,550)
  ctx.font = "22px Verdana";
  ctx.fillStyle = "black"
  ctx.fillText(myPoke.m4,230,550)
};

function attack(){
  let x = event.offsetX
  let y = event.offsetY
  console.clear()
  console.log(x)
  console.log(y)
  if (x>28 && y>485 && x<223 && y<522){
    selectMusic.play();
    turn(0)
  }
  if (x>28 && y>522 && x<223 && y<566){
    selectMusic.play();
    turn(1)
  }
  if (x>223 && y>485 && x<385 && y<522){
    selectMusic.play();
    turn(2)
  }
  if (x>223 && y>522 && x<385 && y<566){
    selectMusic.play();
    turn(3)
  }
  if (x>575 && y>480 && x<750 && y<525){
    selectMusic.play();
    alert("That's cheating!")
  }
  if (x>575 && y>525 && x<750 && y<575){
    selectMusic.play();
    alert("You cannot run away in a middle of a battle!")
  }
  if (x>403 && y>525 && x<575 && y<575){
    selectMusic.play();
    changeScreen()
  }
}


function myAtk(x){
  let multi = 1
  let chance = Math.random() * 100
  let move = myMoves[x]
  alert(myPoke.name + " used " + move.name + "!")
  attackSong()
  if(move.acc > chance){
    if(move.type == enemy.weak){
      multi = 1.5
    }
    else if (move.type == enemy.type){
      multi = 0.5
    }
    enemy.hp -= Math.round((move.power * multi) + myPoke.atk) - enemy.def
    draw()
    if (multi == 1.5){
      alert("It's super effective!")
    }
    else if (multi == 0.5){
      alert("It's not very effective...")
    }
  }
  else {
    alert(myPoke.name + " attack missed!")
  }
}

function enemyAtk(){
  let multi = 1
  let r = Math.round(Math.random() * (3));
  let chance = Math.random() * 100
  let move = enemyMoves[r]
  alert(enemy.name + " used " + move.name + "!")
  enemyAttackSong()
  if(move.acc > chance){
    if(move.type == myPoke.weak){
      let multi = 1.5
      alert("It's super effective!")
    };
    if (move.type == myPoke.type){
      let multi = 0.5
      alert("It's not very effective...")
    };
    myPoke.hp = myPoke.hp - (Math.round((move.power * multi) + enemy.atk) - myPoke.def)
    if (multi == 1.5){
      alert("It's super effective!")
    }else if (multi == 0.5){
      alert("It's not very effective...")
    }
  }
  else{
    alert(enemy.name + " attack missed!")
  }
}

function turn(x){
  //roll a dice using accuracy of move
  //check if the move is/is not effective against it
  //deal damage and reduce health, if health is 0 then die
  if (myPoke.spd > enemy.spd){
    myAtk(x)
    if (enemy.hp <= 0){
      alert("Foe's " + enemy.name + " fainted!")
      enemyChange()
    }
    else{
      enemyAtk();
      if (myPoke.hp <= 0){
        alert(myPoke.name + " fainted!")
        if (pikachu.hp <= 0 && charizard.hp <= 0 && venusaur.hp <= 0 & blastoise.hp <= 0){
          document.getElementById("drawingSurface").removeEventListener("click",attack)
          bgMusic.pause();
          defeatMusic.play();
          ctx.clearRect(0, 0, 768, 576);
          ctx.drawImage(defeatPic,0,0,1024,576,0,0,768,576);
        }
        else{
          changeScreen()
        }
      }
    }
  }
  else if (myPoke.spd < enemy.spd){
    enemyAtk()
    if (myPoke.hp <= 0){
      alert(myPoke.name + " fainted!")
      changeScreen()
    }
    else{
      myAtk(x);
      if (enemy.hp <= 0){
        alert("Foe's " + enemy.name + " fainted!")
        enemyChange()
      };
    };
  };
};
let i = 0

function enemyChange(){
  i++
  enemy = enemyPokemon[i]
  if(i == 0){
    enemy = enemyPokemon[0]
    enemyMoves = pidgeotMoves;
    draw();
  }
  if(i == 1){
    enemy = enemyPokemon[1]
    enemyMoves = arcanineMoves;
    draw();
  }
  if(i == 2){
    enemy = enemyPokemon[2]
    enemyMoves = gyaradosMoves;
    draw();
  }
  if(i == 3){
    enemy = enemyPokemon[3]
    enemyMoves = rhydonMoves;
    draw();
  }
  if(i == 4){
    document.getElementById("drawingSurface").removeEventListener("click",attack)
    bgMusic.pause();
    victoryMusic.play();
    ctx.clearRect(0, 0, 768, 576);
    ctx.drawImage(victoryPic,0,0,1024,576,0,0,768,576);
  }
}


function changeScreen(){
  document.getElementById("drawingSurface").removeEventListener("click",attack)
  document.getElementById('drawingSurface').addEventListener("click", changePoke)
  ctx.clearRect(0,0,768,576)
  ctx.drawImage(selectBG,0,0,3200,2400,0,0,768,576);
  ctx.fillStyle = "rgb(30,144,255)";
  ctx.fillRect(11,15,370,135)
  ctx.fillRect(11,160,370,135)
  ctx.fillRect(11,305,370,135)
  ctx.fillRect(390,35,370,135)
  ctx.fillRect(390,180,370,135)
  ctx.fillRect(390,325,370,135)
  ctx.font = "30px Verdana";
  ctx.fillStyle = "black"
  ctx.fillText(myPokemon[0].name,100,65);
  ctx.fillText(myPokemon[1].name,100,210);
  ctx.fillText(myPokemon[2].name,100,355);
  ctx.fillText(myPokemon[3].name,483,77);
};

function isAlive(){
  draw()
  document.getElementById("drawingSurface").removeEventListener("click",changePoke)
  alert(myPoke.name + " I choose you!")
}


function changePoke(){
  let x = event.offsetX
  let y = event.offsetY
  console.log(event.offsetX)
  console.log(event.offsetY)
  if (x > 11 && y > 15 && x < 380 && y < 150){
    selectMusic.play();
    if (pikachu.hp<=0){
      alert(pikachu.name + " has fainted!")
    }
    else if (pikachu == myPoke){
      alert(myPoke.name + " is already in play!")
    }
    else{
      myPoke = pikachu;
      myMoves = pikachuMoves;
      isAlive()
    }
  }
  if (x > 11 && y > 160 && x < 380 && y < 295){
    selectMusic.play();
    if (charizard.hp<=0){
      alert(charizard.name + " has fainted!")
    }
    else if (charizard == myPoke){
      alert(myPoke.name + " is already in play!")
    }
    else{
      myPoke = charizard;
      myMoves = charizardMoves;
      isAlive()
    }
  }
  if (x > 1 && y > 310 && x < 380 && y < 445){
    selectMusic.play();
    if (blastoise.hp<=0){
      alert(blastoise.name + " has fainted!")
    }
    else if (blastoise == myPoke){
      alert(blastoise.name + " is already in play!")
    }
    else{
      myPoke = blastoise;
      myMoves = blastoiseMoves;
      isAlive()
    }
  }
  if (x > 390 && y > 40 && x < 760 && y < 170){
    selectMusic.play();
    if (venusaur.hp<=0){
      alert(venusaur.name + " has fainted!")
    }
    else if (venusaur == myPoke){
      alert(venusaur.name + " is already in play!")
    }
    else{
      myPoke = venusaur;
      myMoves = venusaurMoves;
      isAlive()
    }
  }
  if (x > 600 && y > 490 && x < 755 && y < 550){
    selectMusic.play();
    if(myPoke.hp <= 0){
      alert("You need to bring out a Pokémon!")
    }
    else{
      draw()
      document.getElementById("drawingSurface").removeEventListener("click",changePoke)
    }
  }
}
