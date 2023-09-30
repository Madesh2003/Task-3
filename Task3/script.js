function cefunction1(tag, attname, attvalue, contant) {
   var ele = document.createElement(tag);
   ele.setAttribute(attname, attvalue);
   ele.innerHTML = contant;
   return ele;
}

function cefunction2(tag, attname1, attvalue1, attname2, attvalue2, contant) {
   var ele = document.createElement(tag);
   ele.setAttribute(attname1, attvalue1);
   ele.setAttribute(attname2, attvalue2);
   ele.innerHTML = contant;
   return ele;
}

function cefunction3(tag, attname1, attvalue1, attname2, attvalue2, attname3, attvalue3, contant) {
   var ele = document.createElement(tag);
   ele.setAttribute(attname1, attvalue1);
   ele.setAttribute(attname2, attvalue2);
   ele.setAttribute(attname3, attvalue3);
   ele.innerHTML = contant;
   return ele;
}

//heading section

var container1 = cefunction1("div", "class", "container", "");
document.body.append(container1);
var heading = cefunction1("h4", "style", "text-align: center; color: green; padding: 30px 0px; font-weight: bold;", "Let's Play Dice");
container1.append(heading);

//player truns

var container3 = cefunction1("div", "class", "container", "");
document.body.append(container3);
var playertrun = cefunction2("h2", "id", "turn", "style", "text-align: center; padding:40px 0px;", "Player 1 Must Roll The Dice To Start The Game");
container3.append(playertrun);


//player1 section

var container2 = cefunction1("div", "class", "container", "");
document.body.append(container2);
var flexproperty = cefunction1("div", "class", "d-flex justify-content-between", "");
container2.append(flexproperty);
var divplayer1 = cefunction1("div", "class", "divplayer1", "");
flexproperty.append(divplayer1);
var player1 = cefunction2("h3", "id", "player1", "style", "font-weight: bold; padding:10px 0px;", "Player-1");
divplayer1.append(player1);
var player1score = cefunction2("h1", "id", "p1score", "style", "font-weight: bold; font-size:50px; text-align: center; padding:20px 0px;", "0");
divplayer1.append(player1score);
var player1btn = cefunction3("button", "id", "btn1", "onclick", "randomimg()", "style", "border-radius: 10px; border: black 1px solid; background-color: green; color: white; margin:5px 0px; width:120px; height:40px;", "Roll Now");
divplayer1.append(player1btn);

//diceimage section

var divimg = cefunction1("div", "id", "divimages", "");
flexproperty.append(divimg);
var diceimage = cefunction2("section", "style", "height: 100px; width: 100px; background-position: center; background-repeat: no-repeat; margin: 50px;", "class", "diceimgs", "");
divimg.append(diceimage);

//player2 section
var divplayer2 = cefunction1("div", "class", "divplayer2", "");
flexproperty.append(divplayer2);
var player2 = cefunction1("h3", "style", "font-weight: bold; padding:10px 0px;", "Player-2");
divplayer2.append(player2);
var player2score = cefunction2("h1", "id", "p2score", "style", "font-weight: bold; font-size:50px; text-align: center; padding:20px 0px;", "0");
divplayer2.append(player2score);
var player2btn = cefunction3("button", "id", "btn2", "onclick", "randomimg2()", "style", "border-radius: 10px; border: black 1px solid; background-color: green; color: white; width:120px; height:40px; margin:5px opx 5px 5px;", "Roll Now");
divplayer2.append(player2btn);


//reset
var container4 = cefunction1("div", "class", "container", "");
document.body.append(container4);
var divreset = cefunction1("div", "style", "text-align: center", "");
container4.append(divreset);
var resetbtn = cefunction2("button", "onclick", "startagain()", "style", "background-color: #FF9090; border-radius: 10px; border: black 1px solid; width:120px; height:40px;  margin:50px 0px; font-weight: bold;", "RESET");
divreset.append(resetbtn);

//winner
var container5 = cefunction1("div", "class", "container", "");
document.body.append(container5);
var winner = cefunction2("h4", "id", "win", "style", "text-align:center; font-weight: bold;", "");
container5.append(winner);


//JS start from here


var scoreofp1 = 0;
var scoreofp2 = 0;
var turnofplayers = document.getElementById("turn");
var rollnow1 = document.getElementById("btn1");
var rollnow2 = document.getElementById("btn2");
var value1 = document.getElementById("p1score");
var value2 = document.getElementById("p2score");
var pwin = document.getElementById("win");
var imgs = [
   'url("assets/dice1.jpg")',
   'url("assets/dice2.jpg")',
   'url("assets/dice3.jpg")',
   'url("assets/dice4.jpg")',
   'url("assets/dice5.jpg")',
   'url("assets/dice6.jpg")'
];
var pic = document.querySelector("section");
document.getElementById("btn2").disabled = true;
rollnow2.style.backgroundColor = "#808080";

function randomimg() {
   var x = Math.floor(Math.random() * imgs.length);
   var a = imgs[x];
   pic.style.backgroundImage = a;
   var hi = x + 1;
   scoreofp1 += hi;
   value1.textContent = scoreofp1;
   turnofplayers.textContent = "player-2 Turn";
   rollnow1.style.backgroundColor = "#808080";
   rollnow2.style.backgroundColor = "green";
   document.getElementById("btn1").disabled = true;
   document.getElementById("btn2").disabled = false;
   if (scoreofp1 >= 10) {
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
      turnofplayers.innerHTML = "<b>player 1 Won the match</b><style>#turn{color: #bf10de; background-image: -webkit-linear-gradient(0deg, #bf10de 0%, #000bab 100%); background-clip: text; -webkit-background-clip: text; text-fill-color: transparent; -webkit-text-fill-color: transparent;}</style>";
      pwin.innerHTML = "Click the 'RESET' Button to start a new game<style>#win{color: #2196f3; background-image: -webkit-linear-gradient(0deg, #2196f3 0%, #9c27b0 100%); background-clip: text; -webkit-background-clip: text; text-fill-color: transparent; -webkit-text-fill-color: transparent;}<style>";
   }
}

function randomimg2() {
   var x = Math.floor(Math.random() * imgs.length);
   var a = imgs[x];
   pic.style.backgroundImage = a;
   var hi = x + 1;
   scoreofp2 += hi;
   value2.textContent = scoreofp2;
   turnofplayers.textContent = "player-1 Turn";
   rollnow2.style.backgroundColor = "#808080";
   rollnow1.style.backgroundColor = "green";
   document.getElementById("btn1").disabled = false;
   document.getElementById("btn2").disabled = true;
   if (scoreofp2 >= 10) {
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
      turnofplayers.innerHTML = "<b>player 2 Won the match</b><style>#turn{color: #bf10de; background-image: -webkit-linear-gradient(0deg, #bf10de 0%, #000bab 100%); background-clip: text; -webkit-background-clip: text; text-fill-color: transparent; -webkit-text-fill-color: transparent;}</style>";
      pwin.innerHTML = "Click the 'RESET' Button to start a new game<style>#win{color: #2196f3; background-image: -webkit-linear-gradient(0deg, #2196f3 0%, #9c27b0 100%); background-clip: text; -webkit-background-clip: text; text-fill-color: transparent; -webkit-text-fill-color: transparent;}<style>";
   }
}

function startagain() {
   scoreofp1 = 0;
   scoreofp2 = 0;
   turn.innerText = "Player 1 Must Roll The Dice To Start The Game";
   p1score.innerText = "0";
   p2score.innerText = "0";
   pic.style.backgroundImage = "";
   pwin.innerHTML = "";
   document.getElementById("btn1").disabled = false;
   rollnow1.style.backgroundColor = "green";
   rollnow2.style.backgroundColor = "#808080";
}



//This Game was developed by madesh