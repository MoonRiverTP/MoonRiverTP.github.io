//Scripts n shit
console.log("the new one 2");
var gamesP;
var imglink;

var t1seriesagg;
var t2seriesagg;
//the scorecount variables^

var t1seriesagg2 = 0;
var t2seriesagg2 = 0;
//the game count variables ^

var g1otstring;
var g2otstring;
var g3otstring;
var g4otstring;
var g5otstring;
var g6otstring;
var g7otstring;

var g1mapname;
var g2mapname;
var g3mapname;
var g4mapname;
var g5mapname;
var g6mapname;
var g7mapname;

var t1name;
var t1abr;
var t1abrg1;
var t1abrg2;
var t1abrg3;
var t1abrg4;
var t1abrg5;
var t1abrg6;
var t1abrg7;

var t2name;
var t2abrg1;
var t2abrg2;
var t2abrg3;
var t2abrg4;
var t2abrg5;
var t2abrg6;
var t2abrg7;

var sname;
var slink;

var g1t1agg;
var g1t2agg;

var g2t1agg;
var g2t2agg;

var g3t1agg;
var g3t2agg;

var g4t1agg;
var g4t2agg;

var g5t1agg;
var g5t2agg;

var g6t1agg;
var g6t2agg;

var g7t1agg;
var g7t2agg;

var t1g1h1score;
var t2g1h1score;
var g1h1eulink;
var t1g1h2score=0;
var t2g1h2score=0;
var g1h2eulink;
var t1g1otscore =0;
var t2g1otscore=0;
var g1oteulink = 0;

var t1g2h1score;
var t2g2h1score;
var g2h1eulink;
var t1g2h2score=0;
var t2g2h2score=0;
var g2h2eulink;
var t1g2otscore=0;
var t2g2otscore=0;
var g2oteulink = 0;

var t1g3h1score;
var t2g3h1score;
var g3h1eulink;
var t1g3h2score=0;
var t2g3h2score=0;
var g3h2eulink;
var t1g3otscore=0;
var t2g3otscore=0;
var g3oteulink = 0;

var t1g4h1score;
var t2g4h1score;
var g4h1eulink;
var t1g4h2score=0;
var t2g4h2score=0;
var g4h2eulink;
var t1g4otscore=0;
var t2g4otscore=0;
var g4oteulink = 0;

var t1g5h1score;
var t2g5h1score;
var g5h1eulink;
var t1g5h2score=0;
var t2g5h2score=0;
var g5h2eulink;
var t1g5otscore=0;
var t2g5otscore=0;
var g5oteulink = 0;

var t1g6h1score;
var t2g6h1score;
var g6h1eulink;
var t1g6h2score=0;
var t2g6h2score=0;
var g6h2eulink;
var t1g6otscore=0;
var t2g6otscore=0;
var g6oteulink = 0;

var t1g7h1score;
var t2g7h1score;
var g7h1eulink;
var t1g7h2score=0;
var t2g7h2score=0;
var g7h2eulink;
var t1g7otscore=0;
var t2g7otscore=0;
var g7oteulink = 0;

var c;
var plyoff;

var serieswint1abr;
var serieswint2abr;

var jsonData;

//testEUFetch();
function testEUFetch(){
	let baseUrl = "https://tagpro.eu/data/"
   let url = "https://tagpro.eu/?match=2609641";
	let splitUrl= url.slice(18,35);
	console.log(splitUrl);
	let finalString = baseUrl.concat(splitUrl);
	console.log(finalString);



   (async () => {
      let response = await fetch(finalString);
      let jsonData = await response.json();
      console.log(jsonData);
   })()

}

function checkStuff(){
	/*
		This function determines how many games you are playing, And whether or not
		you are in playoff mode, It then adjusts the HTML to
		display the correct amount of game input areas and halfs if in play off mode.

	 */
	gamesP = 2;
	plyoff = 0;
	setInterval(function(){
		if(document.getElementById("2g").checked){
			gamesP = 2;
		}else if(document.getElementById("3g").checked){
			gamesP = 3;
		}else if(document.getElementById("4g").checked){
			gamesP = 4;
		}else if(document.getElementById("5g").checked){
			gamesP = 5;
		}else if(document.getElementById("6g").checked){
			gamesP = 6;
		}else if(document.getElementById("7g").checked){
			gamesP = 7;
		}
		if(gamesP==2){
			document.getElementById("g3").style.display="none";
			document.getElementById("g4").style.display="none";
			document.getElementById("g5").style.display="none";
			document.getElementById("g6").style.display="none";
			document.getElementById("g7").style.display="none";

		}else if(gamesP==3){
			document.getElementById("g3").style.display="block";
			document.getElementById("g4").style.display="none";
			document.getElementById("g5").style.display="none";
			document.getElementById("g6").style.display="none";
			document.getElementById("g7").style.display="none";
		}else if(gamesP==4){
			document.getElementById("g3").style.display="block";
			document.getElementById("g4").style.display="block";
			document.getElementById("g5").style.display="none";
			document.getElementById("g6").style.display="none";
			document.getElementById("g7").style.display="none";
		}else if(gamesP==5){
			document.getElementById("g3").style.display="block";
			document.getElementById("g4").style.display="block";
			document.getElementById("g5").style.display="block";
			document.getElementById("g6").style.display="none";
			document.getElementById("g7").style.display="none";
		}else if(gamesP==6){
			document.getElementById("g3").style.display="block";
			document.getElementById("g4").style.display="block";
			document.getElementById("g5").style.display="block";
			document.getElementById("g6").style.display="block";
			document.getElementById("g7").style.display="none";
		}else if(gamesP==7){
			document.getElementById("g3").style.display="block";
			document.getElementById("g4").style.display="block";
			document.getElementById("g5").style.display="block";
			document.getElementById("g6").style.display="block";
			document.getElementById("g7").style.display="block";
		}

		if(document.getElementById("playoffyes").checked){
			plyoff = 1;
		}else{
			plyoff = 0;
		}
		if(plyoff==1){
			var h2e = document.getElementsByClassName("half2");
			var i;
			for(i=0;i < h2e.length; i++){
				h2e[i].style.display="none";
			}
		}else{
			var h2e = document.getElementsByClassName("half2");
			var i;
			for(i=0;i < h2e.length; i++){
				h2e[i].style.display="block";
			}
		}

		if(document.getElementById("g1ot").checked){
			document.getElementById("otgame1").style.display="block";
		}else{
			document.getElementById("otgame1").style.display="none";
		}

		if(document.getElementById("g2ot").checked){
			document.getElementById("otgame2").style.display="block";
		}else{
			document.getElementById("otgame2").style.display="none";
		}

		if(document.getElementById("g3ot").checked){
			document.getElementById("otgame3").style.display="block";
		}else{
			document.getElementById("otgame3").style.display="none";
		}

		if(document.getElementById("g4ot").checked){
			document.getElementById("otgame4").style.display="block";
		}else{
			document.getElementById("otgame4").style.display="none";
		}

		if(document.getElementById("g5ot").checked){
			document.getElementById("otgame5").style.display="block";
		}else{
			document.getElementById("otgame5").style.display="none";
		}

		if(document.getElementById("g6ot").checked){
			document.getElementById("otgame6").style.display="block";
		}else{
			document.getElementById("otgame6").style.display="none";
		}

		if(document.getElementById("g7ot").checked){
			document.getElementById("otgame7").style.display="block";
		}else{
			document.getElementById("otgame7").style.display="none";
		}
	}, 500);
}

function drawPic(){
	if(gamesP > 3){
		document.getElementById("picarea2").style.display="inline";
		document.getElementById("mobilepic2").innerHTML= "<script>generatePic();</script>";
	}else{
	document.getElementById("picarea").style.display="inline";
	document.getElementById("mobilepic").innerHTML = "<script>generatePic();</script>";
	}
	console.log("generating pic")
	generatePic();

}

function generatePic(){
	if(plyoff == 1){
		if(gamesP ==2){
			c = document.getElementById("mobilepic");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			console.log(g1mapname);
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}

			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}


			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

		}else if(gamesP ==3){
			c = document.getElementById("mobilepic");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}

			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}


			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}

			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3

		}else if(gamesP ==4){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}

			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}


			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}

			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}

			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",413,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4

		}else if(gamesP ==5){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}

			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}


			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}

			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}

			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",413,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4
			//////game5
			ctx.fillText("Game 5: "+g5mapname+"",240,180);
			ctx.fillText("Half 1: ",255,200);
			//g5half1
			if(t1g5h1score > t2g5h1score){
				ctx.strokeText(t1abr+": "+t1g5h1score+"", 310, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g5h1score+"", 310, 200);
			}
			if(t2g5h1score > t1g5h1score){
				ctx.strokeText(t2abr+": "+t2g5h1score+"", 380, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g5h1score+"", 380, 200);
			}

			//g5OT
			if(document.getElementById("g5ot").checked){
				ctx.fillText("OT: ",275,238);
				if(t1g5otscore > t2g5otscore){
					ctx.strokeText(t1abr+": "+t1g5otscore+"",310,238);
					ctx.fillText(t2g5otscore+"",413,238);
				}else{
					ctx.fillText(t1g5otscore+"",353,238);
					ctx.strokeText(t2abr+": "+t2g5otscore+"",380,238);
				}
			}
			ctx.fillText("agg: ",267,254);
			ctx.fillText(t1abr+": "+g5t1agg+"",310,254);
			ctx.fillText(t2abr+": "+g5t2agg+"",380,254);
			//end of game 5

		}else if(gamesP ==6){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}

			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}


			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}

			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}

			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",413,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4
			//////game5
			ctx.fillText("Game 5: "+g5mapname+"",240,180);
			ctx.fillText("Half 1: ",255,200);
			//g5half1
			if(t1g5h1score > t2g5h1score){
				ctx.strokeText(t1abr+": "+t1g5h1score+"", 310, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g5h1score+"", 310, 200);
			}
			if(t2g5h1score > t1g5h1score){
				ctx.strokeText(t2abr+": "+t2g5h1score+"", 380, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g5h1score+"", 380, 200);
			}

			//g5OT
			if(document.getElementById("g5ot").checked){
				ctx.fillText("OT: ",275,238);
				if(t1g5otscore > t2g5otscore){
					ctx.strokeText(t1abr+": "+t1g5otscore+"",310,238);
					ctx.fillText(t2g5otscore+"",413,238);
				}else{
					ctx.fillText(t1g5otscore+"",353,238);
					ctx.strokeText(t2abr+": "+t2g5otscore+"",380,238);
				}
			}
			ctx.fillText("agg: ",267,254);
			ctx.fillText(t1abr+": "+g5t1agg+"",310,254);
			ctx.fillText(t2abr+": "+g5t2agg+"",380,254);
			//end of game 5
			////////game6
			ctx.fillText("Game 6: "+g6mapname+"",240,280);
			ctx.fillText("Half 1: ",255,300);
			//g6half1
			if(t1g6h1score > t2g6h1score){
				ctx.strokeText(t1abr+": "+t1g6h1score+"", 310, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g6h1score+"", 310, 300);
			}
			if(t2g6h1score > t1g6h1score){
				ctx.strokeText(t2abr+": "+t2g6h1score+"", 380, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g6h1score+"", 380, 300);
			}

			//g6OT
			if(document.getElementById("g6ot").checked){
				ctx.fillText("OT: ",275,338);
				if(t1g6otscore > t2g6otscore){
					ctx.strokeText(t1abr+": "+t1g6otscore+"",310,338);
					ctx.fillText(t2g6otscore+"",413,338);
				}else{
					ctx.fillText(t1g6otscore+"",353,338);
					ctx.strokeText(t2abr+": "+t2g6otscore+"",380,338);
				}
			}
			ctx.fillText("agg: ",267,354);
			ctx.fillText(t1abr+": "+g6t1agg+"",310,354);
			ctx.fillText(t2abr+": "+g6t2agg+"",380,354);
			//end of game 6

		}else if(gamesP ==7){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}

			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}


			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}

			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}

			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",413,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4
			//////game5
			ctx.fillText("Game 5: "+g5mapname+"",240,180);
			ctx.fillText("Half 1: ",255,200);
			//g5half1
			if(t1g5h1score > t2g5h1score){
				ctx.strokeText(t1abr+": "+t1g5h1score+"", 310, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g5h1score+"", 310, 200);
			}
			if(t2g5h1score > t1g5h1score){
				ctx.strokeText(t2abr+": "+t2g5h1score+"", 380, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g5h1score+"", 380, 200);
			}

			//g5OT
			if(document.getElementById("g5ot").checked){
				ctx.fillText("OT: ",275,238);
				if(t1g5otscore > t2g5otscore){
					ctx.strokeText(t1abr+": "+t1g5otscore+"",310,238);
					ctx.fillText(t2g5otscore+"",413,238);
				}else{
					ctx.fillText(t1g5otscore+"",353,238);
					ctx.strokeText(t2abr+": "+t2g5otscore+"",380,238);
				}
			}
			ctx.fillText("agg: ",267,254);
			ctx.fillText(t1abr+": "+g5t1agg+"",310,254);
			ctx.fillText(t2abr+": "+g5t2agg+"",380,254);
			//end of game 5
			////////game6
			ctx.fillText("Game 6: "+g6mapname+"",240,280);
			ctx.fillText("Half 1: ",255,300);
			//g6half1
			if(t1g6h1score > t2g6h1score){
				ctx.strokeText(t1abr+": "+t1g6h1score+"", 310, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g6h1score+"", 310, 300);
			}
			if(t2g6h1score > t1g6h1score){
				ctx.strokeText(t2abr+": "+t2g6h1score+"", 380, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g6h1score+"", 380, 300);
			}

			//g6OT
			if(document.getElementById("g6ot").checked){
				ctx.fillText("OT: ",275,338);
				if(t1g6otscore > t2g6otscore){
					ctx.strokeText(t1abr+": "+t1g6otscore+"",310,338);
					ctx.fillText(t2g6otscore+"",413,338);
				}else{
					ctx.fillText(t1g6otscore+"",353,338);
					ctx.strokeText(t2abr+": "+t2g6otscore+"",380,338);
				}
			}
			ctx.fillText("agg: ",267,354);
			ctx.fillText(t1abr+": "+g6t1agg+"",310,354);
			ctx.fillText(t2abr+": "+g6t2agg+"",380,354);
			//end of game 6
			//////////game7
			ctx.fillText("Game 7: "+g7mapname+"",450,80);
			ctx.fillText("Half 1: ",465,100);
			//g7half1
			if(t1g7h1score > t2g7h1score){
				ctx.strokeText(t1abr+": "+t1g7h1score+"", 520, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g7h1score+"", 520, 100);
			}
			if(t2g7h1score > t1g7h1score){
				ctx.strokeText(t2abr+": "+t2g7h1score+"", 590, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g7h1score+"", 590, 100);
			}

			//g7OT
			if(document.getElementById("g7ot").checked){
				ctx.fillText("OT: ",485,138);
				if(t1g7otscore > t2g7otscore){
					ctx.strokeText(t1abr+": "+t1g7otscore+"",520,138);
					ctx.fillText(t2g7otscore+"",623,138);
				}else{
					ctx.fillText(t1g7otscore+"",563,138);
					ctx.strokeText(t2abr+": "+t2g7otscore+"",590,138);
				}
			}
			ctx.fillText("agg: ",477,154);
			ctx.fillText(t1abr+": "+g7t1agg+"",520,154);
			ctx.fillText(t2abr+": "+g7t2agg+"",590,154);
			//end of game 7
		}
	}else{
		if(gamesP == 2){
			c = document.getElementById("mobilepic");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}
			//g1half2
			ctx.fillText("Half 2:",35,120);
			if(t1g1h2score > t2g1h2score){
				ctx.strokeText(t1abr+": "+t1g1h2score+"", 90, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g1h2score+"", 90, 120);
			}
			if(t2g1h2score > t1g1h2score){
				ctx.strokeText(t2abr+": "+t2g1h2score+"", 160, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g1h2score+"", 160, 120);
			}
			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1
			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}
			//g2half2
			ctx.fillText("Half 2:",35,220);
			if(t1g2h2score > t2g2h2score){
				ctx.strokeText(t1abr+": "+t1g2h2score+"", 90, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g2h2score+"", 90, 220);
			}
			if(t2g2h2score > t1g2h2score){
				ctx.strokeText(t2abr+": "+t2g2h2score+"", 160, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g2h2score+"", 160, 220);
			}
			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2
		}else if(gamesP == 3){
			c = document.getElementById("mobilepic");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}
			//g1half2
			ctx.fillText("Half 2:",35,120);
			if(t1g1h2score > t2g1h2score){
				ctx.strokeText(t1abr+": "+t1g1h2score+"", 90, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g1h2score+"", 90, 120);
			}
			if(t2g1h2score > t1g1h2score){
				ctx.strokeText(t2abr+": "+t2g1h2score+"", 160, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g1h2score+"", 160, 120);
			}
			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}
			//g2half2
			ctx.fillText("Half 2:",35,220);
			if(t1g2h2score > t2g2h2score){
				ctx.strokeText(t1abr+": "+t1g2h2score+"", 90, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g2h2score+"", 90, 220);
			}
			if(t2g2h2score > t1g2h2score){
				ctx.strokeText(t2abr+": "+t2g2h2score+"", 160, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g2h2score+"", 160, 220);
			}
			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",193,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}
			//g3half2
			ctx.fillText("Half 2:",35,320);
			if(t1g3h2score > t2g3h2score){
				ctx.strokeText(t1abr+": "+t1g3h2score+"", 90, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g3h2score+"", 90, 320);
			}
			if(t2g3h2score > t1g3h2score){
				ctx.strokeText(t2abr+": "+t2g3h2score+"", 160, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g3h2score+"", 160, 320);
			}
			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
		}else if(gamesP == 4){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}
			//g1half2
			ctx.fillText("Half 2:",35,120);
			if(t1g1h2score > t2g1h2score){
				ctx.strokeText(t1abr+": "+t1g1h2score+"", 90, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g1h2score+"", 90, 120);
			}
			if(t2g1h2score > t1g1h2score){
				ctx.strokeText(t2abr+": "+t2g1h2score+"", 160, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g1h2score+"", 160, 120);
			}
			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}
			//g2half2
			ctx.fillText("Half 2:",35,220);
			if(t1g2h2score > t2g2h2score){
				ctx.strokeText(t1abr+": "+t1g2h2score+"", 90, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g2h2score+"", 90, 220);
			}
			if(t2g2h2score > t1g2h2score){
				ctx.strokeText(t2abr+": "+t2g2h2score+"", 160, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g2h2score+"", 160, 220);
			}
			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}
			//g3half2
			ctx.fillText("Half 2:",35,320);
			if(t1g3h2score > t2g3h2score){
				ctx.strokeText(t1abr+": "+t1g3h2score+"", 90, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g3h2score+"", 90, 320);
			}
			if(t2g3h2score > t1g3h2score){
				ctx.strokeText(t2abr+": "+t2g3h2score+"", 160, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g3h2score+"", 160, 320);
			}
			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}
			//g4half2
			ctx.fillText("Half 2:",255,120);
			if(t1g4h2score > t2g4h2score){
				ctx.strokeText(t1abr+": "+t1g4h2score+"", 310, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g4h2score+"", 310, 120);
			}
			if(t2g4h2score > t1g4h2score){
				ctx.strokeText(t2abr+": "+t2g4h2score+"", 380, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g4h2score+"", 380, 120);
			}
			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",373,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4


		}else if(gamesP == 5){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}
			//g1half2
			ctx.fillText("Half 2:",35,120);
			if(t1g1h2score > t2g1h2score){
				ctx.strokeText(t1abr+": "+t1g1h2score+"", 90, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g1h2score+"", 90, 120);
			}
			if(t2g1h2score > t1g1h2score){
				ctx.strokeText(t2abr+": "+t2g1h2score+"", 160, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g1h2score+"", 160, 120);
			}
			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}
			//g2half2
			ctx.fillText("Half 2:",35,220);
			if(t1g2h2score > t2g2h2score){
				ctx.strokeText(t1abr+": "+t1g2h2score+"", 90, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g2h2score+"", 90, 220);
			}
			if(t2g2h2score > t1g2h2score){
				ctx.strokeText(t2abr+": "+t2g2h2score+"", 160, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g2h2score+"", 160, 220);
			}
			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}
			//g3half2
			ctx.fillText("Half 2:",35,320);
			if(t1g3h2score > t2g3h2score){
				ctx.strokeText(t1abr+": "+t1g3h2score+"", 90, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g3h2score+"", 90, 320);
			}
			if(t2g3h2score > t1g3h2score){
				ctx.strokeText(t2abr+": "+t2g3h2score+"", 160, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g3h2score+"", 160, 320);
			}
			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}
			//g4half2
			ctx.fillText("Half 2:",255,120);
			if(t1g4h2score > t2g4h2score){
				ctx.strokeText(t1abr+": "+t1g4h2score+"", 310, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g4h2score+"", 310, 120);
			}
			if(t2g4h2score > t1g4h2score){
				ctx.strokeText(t2abr+": "+t2g4h2score+"", 380, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g4h2score+"", 380, 120);
			}
			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",373,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4
			//////game5
			ctx.fillText("Game 5: "+g5mapname+"",240,180);
			ctx.fillText("Half 1: ",255,200);
			//g5half1
			if(t1g5h1score > t2g5h1score){
				ctx.strokeText(t1abr+": "+t1g5h1score+"", 310, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g5h1score+"", 310, 200);
			}
			if(t2g5h1score > t1g5h1score){
				ctx.strokeText(t2abr+": "+t2g5h1score+"", 380, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g5h1score+"", 380, 200);
			}
			//g5half2
			ctx.fillText("Half 2:",255,220);
			if(t1g5h2score > t2g5h2score){
				ctx.strokeText(t1abr+": "+t1g5h2score+"", 310, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g5h2score+"", 310, 220);
			}
			if(t2g5h2score > t1g5h2score){
				ctx.strokeText(t2abr+": "+t2g5h2score+"", 380, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g5h2score+"", 380, 220);
			}
			//g5OT
			if(document.getElementById("g5ot").checked){
				ctx.fillText("OT: ",235,238);
				if(t1g5otscore > t2g5otscore){
					ctx.strokeText(t1abr+": "+t1g5otscore+"",310,238);
					ctx.fillText(t2g5otscore+"",373,238);
				}else{
					ctx.fillText(t1g5otscore+"",353,238);
					ctx.strokeText(t2abr+": "+t2g5otscore+"",380,238);
				}
			}
			ctx.fillText("agg: ",267,254);
			ctx.fillText(t1abr+": "+g5t1agg+"",310,254);
			ctx.fillText(t2abr+": "+g5t2agg+"",380,254);
			//end of game 5


		}else if(gamesP == 6){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}
			//g1half2
			ctx.fillText("Half 2:",35,120);
			if(t1g1h2score > t2g1h2score){
				ctx.strokeText(t1abr+": "+t1g1h2score+"", 90, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g1h2score+"", 90, 120);
			}
			if(t2g1h2score > t1g1h2score){
				ctx.strokeText(t2abr+": "+t2g1h2score+"", 160, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g1h2score+"", 160, 120);
			}
			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}
			//g2half2
			ctx.fillText("Half 2:",35,220);
			if(t1g2h2score > t2g2h2score){
				ctx.strokeText(t1abr+": "+t1g2h2score+"", 90, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g2h2score+"", 90, 220);
			}
			if(t2g2h2score > t1g2h2score){
				ctx.strokeText(t2abr+": "+t2g2h2score+"", 160, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g2h2score+"", 160, 220);
			}
			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}
			//g3half2
			ctx.fillText("Half 2:",35,320);
			if(t1g3h2score > t2g3h2score){
				ctx.strokeText(t1abr+": "+t1g3h2score+"", 90, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g3h2score+"", 90, 320);
			}
			if(t2g3h2score > t1g3h2score){
				ctx.strokeText(t2abr+": "+t2g3h2score+"", 160, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g3h2score+"", 160, 320);
			}
			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}
			//g4half2
			ctx.fillText("Half 2:",255,120);
			if(t1g4h2score > t2g4h2score){
				ctx.strokeText(t1abr+": "+t1g4h2score+"", 310, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g4h2score+"", 310, 120);
			}
			if(t2g4h2score > t1g4h2score){
				ctx.strokeText(t2abr+": "+t2g4h2score+"", 380, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g4h2score+"", 380, 120);
			}
			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",373,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4
			//////game5
			ctx.fillText("Game 5: "+g5mapname+"",240,180);
			ctx.fillText("Half 1: ",255,200);
			//g5half1
			if(t1g5h1score > t2g5h1score){
				ctx.strokeText(t1abr+": "+t1g5h1score+"", 310, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g5h1score+"", 310, 200);
			}
			if(t2g5h1score > t1g5h1score){
				ctx.strokeText(t2abr+": "+t2g5h1score+"", 380, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g5h1score+"", 380, 200);
			}
			//g5half2
			ctx.fillText("Half 2:",255,220);
			if(t1g5h2score > t2g5h2score){
				ctx.strokeText(t1abr+": "+t1g5h2score+"", 310, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g5h2score+"", 310, 220);
			}
			if(t2g5h2score > t1g5h2score){
				ctx.strokeText(t2abr+": "+t2g5h2score+"", 380, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g5h2score+"", 380, 220);
			}
			//g5OT
			if(document.getElementById("g5ot").checked){
				ctx.fillText("OT: ",235,238);
				if(t1g5otscore > t2g5otscore){
					ctx.strokeText(t1abr+": "+t1g5otscore+"",310,238);
					ctx.fillText(t2g5otscore+"",373,238);
				}else{
					ctx.fillText(t1g5otscore+"",353,238);
					ctx.strokeText(t2abr+": "+t2g5otscore+"",380,238);
				}
			}
			ctx.fillText("agg: ",267,254);
			ctx.fillText(t1abr+": "+g5t1agg+"",310,254);
			ctx.fillText(t2abr+": "+g5t2agg+"",380,254);
			//end of game 5
			////////game6
			ctx.fillText("Game 6: "+g6mapname+"",240,280);
			ctx.fillText("Half 1: ",255,300);
			//g6half1
			if(t1g6h1score > t2g6h1score){
				ctx.strokeText(t1abr+": "+t1g6h1score+"", 310, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g6h1score+"", 310, 300);
			}
			if(t2g6h1score > t1g6h1score){
				ctx.strokeText(t2abr+": "+t2g6h1score+"", 380, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g6h1score+"", 380, 300);
			}
			//g6half2
			ctx.fillText("Half 2:",255,320);
			if(t1g6h2score > t2g6h2score){
				ctx.strokeText(t1abr+": "+t1g6h2score+"", 310, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g6h2score+"", 310, 320);
			}
			if(t2g6h2score > t1g6h2score){
				ctx.strokeText(t2abr+": "+t2g6h2score+"", 380, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g6h2score+"", 380, 320);
			}
			//g6OT
			if(document.getElementById("g6ot").checked){
				ctx.fillText("OT: ",275,338);
				if(t1g6otscore > t2g6otscore){
					ctx.strokeText(t1abr+": "+t1g6otscore+"",310,338);
					ctx.fillText(t2g6otscore+"",373,338);
				}else{
					ctx.fillText(t1g6otscore+"",353,338);
					ctx.strokeText(t2abr+": "+t2g6otscore+"",380,338);
				}
			}
			ctx.fillText("agg: ",267,354);
			ctx.fillText(t1abr+": "+g6t1agg+"",310,354);
			ctx.fillText(t2abr+": "+g6t2agg+"",380,354);
			//end of game 6

		}else if(gamesP == 7){
			c = document.getElementById("mobilepic2");
			var ctx = c.getContext("2d");
			var img = document.getElementById("mbbg2");

			ctx.font = "30px 'Raleway', sans-serif";
			ctx.drawImage(img,0,0);
			ctx.strokeStyle = "white";
			ctx.strokeText(t1abr+" vs "+t2abr, 40, 40);
			ctx.fillStyle="white";
			ctx.font = "15px 'Raleway', sans-serif";

			//GAme1
			ctx.fillText("Game 1: "+g1mapname+"",20,80);
			ctx.fillText("Half 1: ",35,100);
			//g1half1
			if(t1g1h1score > t2g1h1score){
				ctx.strokeText(t1abr+": "+t1g1h1score+"", 90, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g1h1score+"", 90, 100);
			}
			if(t2g1h1score > t1g1h1score){
				ctx.strokeText(t2abr+": "+t2g1h1score+"", 160, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g1h1score+"", 160, 100);
			}
			//g1half2
			ctx.fillText("Half 2:",35,120);
			if(t1g1h2score > t2g1h2score){
				ctx.strokeText(t1abr+": "+t1g1h2score+"", 90, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g1h2score+"", 90, 120);
			}
			if(t2g1h2score > t1g1h2score){
				ctx.strokeText(t2abr+": "+t2g1h2score+"", 160, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g1h2score+"", 160, 120);
			}
			//g1OT
			if(document.getElementById("g1ot").checked){
				ctx.fillText("OT: ",55,138);
				if(t1g1otscore > t2g1otscore){
					ctx.strokeText(t1abr+": "+t1g1otscore+"",90,138);
					ctx.fillText(t2g1otscore+"",193,138);
				}else{
					ctx.fillText(t1g1otscore+"",133,138);
					ctx.strokeText(t2abr+": "+t2g1otscore+"",160,138);
				}
			}
			ctx.fillText("agg: ",47,154);
			ctx.fillText(t1abr+": "+g1t1agg+"",90,154);
			ctx.fillText(t2abr+": "+g1t2agg+"",160,154);
			//end of game 1

			//game2
			ctx.fillText("Game 2: "+g2mapname+"",20,180);
			ctx.fillText("Half 1: ",35,200);
			//g2half1
			if(t1g2h1score > t2g2h1score){
				ctx.strokeText(t1abr+": "+t1g2h1score+"", 90, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g2h1score+"", 90, 200);
			}
			if(t2g2h1score > t1g2h1score){
				ctx.strokeText(t2abr+": "+t2g2h1score+"", 160, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g2h1score+"", 160, 200);
			}
			//g2half2
			ctx.fillText("Half 2:",35,220);
			if(t1g2h2score > t2g2h2score){
				ctx.strokeText(t1abr+": "+t1g2h2score+"", 90, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g2h2score+"", 90, 220);
			}
			if(t2g2h2score > t1g2h2score){
				ctx.strokeText(t2abr+": "+t2g2h2score+"", 160, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g2h2score+"", 160, 220);
			}
			//g2OT
			if(document.getElementById("g2ot").checked){
				ctx.fillText("OT: ",55,238);
				if(t1g2otscore > t2g2otscore){
					ctx.strokeText(t1abr+": "+t1g2otscore+"",90,238);
					ctx.fillText(t2g2otscore+"",193,238);
				}else{
					ctx.fillText(t1g2otscore+"",133,238);
					ctx.strokeText(t2abr+": "+t2g2otscore+"",160,238);
				}
			}
			ctx.fillText("agg: ",47,254);
			ctx.fillText(t1abr+": "+g2t1agg+"",90,254);
			ctx.fillText(t2abr+": "+g2t2agg+"",160,254);
			//end of game 2

			//game3
			ctx.fillText("Game 3: "+g3mapname+"",20,280);
			ctx.fillText("Half 1: ",35,300);
			//g3half1
			if(t1g3h1score > t2g3h1score){
				ctx.strokeText(t1abr+": "+t1g3h1score+"", 90, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g3h1score+"", 90, 300);
			}
			if(t2g3h1score > t1g3h1score){
				ctx.strokeText(t2abr+": "+t2g3h1score+"", 160, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g3h1score+"", 160, 300);
			}
			//g3half2
			ctx.fillText("Half 2:",35,320);
			if(t1g3h2score > t2g3h2score){
				ctx.strokeText(t1abr+": "+t1g3h2score+"", 90, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g3h2score+"", 90, 320);
			}
			if(t2g3h2score > t1g3h2score){
				ctx.strokeText(t2abr+": "+t2g3h2score+"", 160, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g3h2score+"", 160, 320);
			}
			//g3OT
			if(document.getElementById("g3ot").checked){
				ctx.fillText("OT: ",55,338);
				if(t1g3otscore > t2g3otscore){
					ctx.strokeText(t1abr+": "+t1g3otscore+"",90,338);
					ctx.fillText(t2g3otscore+"",193,338);
				}else{
					ctx.fillText(t1g3otscore+"",133,338);
					ctx.strokeText(t2abr+": "+t2g3otscore+"",160,338);
				}
			}
			ctx.fillText("agg: ",47,354);
			ctx.fillText(t1abr+": "+g3t1agg+"",90,354);
			ctx.fillText(t2abr+": "+g3t2agg+"",160,354);
			//end of game 3
			////game4
			ctx.fillText("Game 4: "+g4mapname+"",240,80);
			ctx.fillText("Half 1: ",255,100);
			//g4half1
			if(t1g4h1score > t2g4h1score){
				ctx.strokeText(t1abr+": "+t1g4h1score+"", 310, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g4h1score+"", 310, 100);
			}
			if(t2g4h1score > t1g4h1score){
				ctx.strokeText(t2abr+": "+t2g4h1score+"", 380, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g4h1score+"", 380, 100);
			}
			//g4half2
			ctx.fillText("Half 2:",255,120);
			if(t1g4h2score > t2g4h2score){
				ctx.strokeText(t1abr+": "+t1g4h2score+"", 310, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g4h2score+"", 310, 120);
			}
			if(t2g4h2score > t1g4h2score){
				ctx.strokeText(t2abr+": "+t2g4h2score+"", 380, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g4h2score+"", 380, 120);
			}
			//g4OT
			if(document.getElementById("g4ot").checked){
				ctx.fillText("OT: ",275,138);
				if(t1g4otscore > t2g4otscore){
					ctx.strokeText(t1abr+": "+t1g4otscore+"",310,138);
					ctx.fillText(t2g4otscore+"",413,138);
				}else{
					ctx.fillText(t1g4otscore+"",353,138);
					ctx.strokeText(t2abr+": "+t2g4otscore+"",380,138);
				}
			}
			ctx.fillText("agg: ",267,154);
			ctx.fillText(t1abr+": "+g4t1agg+"",310,154);
			ctx.fillText(t2abr+": "+g4t2agg+"",380,154);
			//end of game 4
			//////game5
			ctx.fillText("Game 5: "+g5mapname+"",240,180);
			ctx.fillText("Half 1: ",255,200);
			//g5half1
			if(t1g5h1score > t2g5h1score){
				ctx.strokeText(t1abr+": "+t1g5h1score+"", 310, 200);
			}else{
				ctx.fillText(t1abr+": "+t1g5h1score+"", 310, 200);
			}
			if(t2g5h1score > t1g5h1score){
				ctx.strokeText(t2abr+": "+t2g5h1score+"", 380, 200);
			}else{
				ctx.fillText(t2abr+": "+t2g5h1score+"", 380, 200);
			}
			//g5half2
			ctx.fillText("Half 2:",255,220);
			if(t1g5h2score > t2g5h2score){
				ctx.strokeText(t1abr+": "+t1g5h2score+"", 310, 220);
			}else{
				ctx.fillText(t1abr+": "+t1g5h2score+"", 310, 220);
			}
			if(t2g5h2score > t1g5h2score){
				ctx.strokeText(t2abr+": "+t2g5h2score+"", 380, 220);
			}else{
				ctx.fillText(t2abr+": "+t2g5h2score+"", 380, 220);
			}
			//g5OT
			if(document.getElementById("g5ot").checked){
				ctx.fillText("OT: ",275,238);
				if(t1g5otscore > t2g5otscore){
					ctx.strokeText(t1abr+": "+t1g5otscore+"",310,238);
					ctx.fillText(t2g5otscore+"",413,238);
				}else{
					ctx.fillText(t1g5otscore+"",353,238);
					ctx.strokeText(t2abr+": "+t2g5otscore+"",380,238);
				}
			}
			ctx.fillText("agg: ",267,254);
			ctx.fillText(t1abr+": "+g5t1agg+"",310,254);
			ctx.fillText(t2abr+": "+g5t2agg+"",380,254);
			//end of game 5
			////////game6
			ctx.fillText("Game 6: "+g6mapname+"",240,280);
			ctx.fillText("Half 1: ",255,300);
			//g6half1
			if(t1g6h1score > t2g6h1score){
				ctx.strokeText(t1abr+": "+t1g6h1score+"", 310, 300);
			}else{
				ctx.fillText(t1abr+": "+t1g6h1score+"", 310, 300);
			}
			if(t2g6h1score > t1g6h1score){
				ctx.strokeText(t2abr+": "+t2g6h1score+"", 380, 300);
			}else{
				ctx.fillText(t2abr+": "+t2g6h1score+"", 380, 300);
			}
			//g6half2
			ctx.fillText("Half 2:",255,320);
			if(t1g6h2score > t2g6h2score){
				ctx.strokeText(t1abr+": "+t1g6h2score+"", 310, 320);
			}else{
				ctx.fillText(t1abr+": "+t1g6h2score+"", 310, 320);
			}
			if(t2g6h2score > t1g6h2score){
				ctx.strokeText(t2abr+": "+t2g6h2score+"", 380, 320);
			}else{
				ctx.fillText(t2abr+": "+t2g6h2score+"", 380, 320);
			}
			//g6OT
			if(document.getElementById("g6ot").checked){
				ctx.fillText("OT: ",275,338);
				if(t1g6otscore > t2g6otscore){
					ctx.strokeText(t1abr+": "+t1g6otscore+"",310,338);
					ctx.fillText(t2g6otscore+"",413,338);
				}else{
					ctx.fillText(t1g6otscore+"",353,338);
					ctx.strokeText(t2abr+": "+t2g6otscore+"",380,338);
				}
			}
			ctx.fillText("agg: ",267,354);
			ctx.fillText(t1abr+": "+g6t1agg+"",310,354);
			ctx.fillText(t2abr+": "+g6t2agg+"",380,354);
			//end of game 6
			//////////game7
			ctx.fillText("Game 7: "+g7mapname+"",450,80);
			ctx.fillText("Half 1: ",465,100);
			//g7half1
			if(t1g7h1score > t2g7h1score){
				ctx.strokeText(t1abr+": "+t1g7h1score+"", 520, 100);
			}else{
				ctx.fillText(t1abr+": "+t1g7h1score+"", 520, 100);
			}
			if(t2g7h1score > t1g7h1score){
				ctx.strokeText(t2abr+": "+t2g7h1score+"", 590, 100);
			}else{
				ctx.fillText(t2abr+": "+t2g7h1score+"", 590, 100);
			}
			//g7half2
			ctx.fillText("Half 2:",465,120);
			if(t1g7h2score > t2g7h2score){
				ctx.strokeText(t1abr+": "+t1g7h2score+"", 520, 120);
			}else{
				ctx.fillText(t1abr+": "+t1g7h2score+"", 520, 120);
			}
			if(t2g7h2score > t1g7h2score){
				ctx.strokeText(t2abr+": "+t2g7h2score+"", 590, 120);
			}else{
				ctx.fillText(t2abr+": "+t2g7h2score+"", 590, 120);
			}
			//g7OT
			if(document.getElementById("g7ot").checked){
				ctx.fillText("OT: ",485,138);
				if(t1g7otscore > t2g7otscore){
					ctx.strokeText(t1abr+": "+t1g7otscore+"",520,138);
					ctx.fillText(t2g7otscore+"",623,138);
				}else{
					ctx.fillText(t1g7otscore+"",563,138);
					ctx.strokeText(t2abr+": "+t2g7otscore+"",590,138);
				}
			}
			ctx.fillText("agg: ",477,154);
			ctx.fillText(t1abr+": "+g7t1agg+"",520,154);
			ctx.fillText(t2abr+": "+g7t2agg+"",590,154);
			//end of game 7
		}

	}
}


function getScoresFromEu(){
	(async () => {
		let baseUrl = "https://tagpro.eu/data/"
		if(plyoff == 1){
			//get scores from eu if playoffs are enabled
			if(gamesP == 2){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
			}else if(gamesP == 3){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//GAME 3
				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1

				//get OT scores from game 2
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
			}else if(gamesP == 4){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//GAME 3
				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1

				//get OT scores from game 2
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 4 HALF 1
						splitUrl = g4h1eulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);


						g4mapname = jsonData.map.name;
						if(jsonData.teams[0].name == t1abr){
							//team 0 for game is team 1
							t1g4h1score = jsonData.teams[0].score;
							t2g4h1score = jsonData.teams[1].score;
						}else{
							//team 0 for game is team 2
							t1g4h1score = jsonData.teams[1].score;
							t2g4h1score = jsonData.teams[0].score;
						}

						//get half 2 scores from game 1

					//get OT scores from game 2
						if(g4oteulink != 0){
							splitUrl = g4oteulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);

							if(jsonData.teams[0].name == t1abr){
								t1g4otscore = jsonData.teams[0].score;
								t2g4otscore	= jsonData.teams[1].score;
							}else{
								t1g4otscore = jsonData.teams[1].score;
								t2g4otscore	= jsonData.teams[0].score;
							}

						}//end of OT if
			}else if(gamesP == 5){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//GAME 3
				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1

				//get OT scores from game 2
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 4 HALF 1
						splitUrl = g4h1eulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);


						g4mapname = jsonData.map.name;
						if(jsonData.teams[0].name == t1abr){
							//team 0 for game is team 1
							t1g4h1score = jsonData.teams[0].score;
							t2g4h1score = jsonData.teams[1].score;
						}else{
							//team 0 for game is team 2
							t1g4h1score = jsonData.teams[1].score;
							t2g4h1score = jsonData.teams[0].score;
						}

						//get half 2 scores from game 1

					//get OT scores from game 2
						if(g4oteulink != 0){
							splitUrl = g4oteulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);

							if(jsonData.teams[0].name == t1abr){
								t1g4otscore = jsonData.teams[0].score;
								t2g4otscore	= jsonData.teams[1].score;
							}else{
								t1g4otscore = jsonData.teams[1].score;
								t2g4otscore	= jsonData.teams[0].score;
							}

						}//end of OT if

						//GAME 5 HALF 1
							splitUrl = g5h1eulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);


							g5mapname = jsonData.map.name;
							if(jsonData.teams[0].name == t1abr){
								//team 0 for game is team 1
								t1g5h1score = jsonData.teams[0].score;
								t2g5h1score = jsonData.teams[1].score;
							}else{
								//team 0 for game is team 2
								t1g5h1score = jsonData.teams[1].score;
								t2g5h1score = jsonData.teams[0].score;
							}

							//get half 2 scores from game 1

						//get OT scores from game 2
							if(g5oteulink != 0){
								splitUrl = g5oteulink.slice(18,40);
								finalString = baseUrl.concat(splitUrl);
								//loads JSON file from the EU

									response = await fetch(finalString);
									jsonData = await response.json();
									//jsonData = JSON.parse(jsonData);
									console.log(jsonData);

								if(jsonData.teams[0].name == t1abr){
									t1g5otscore = jsonData.teams[0].score;
									t2g5otscore	= jsonData.teams[1].score;
								}else{
									t1g5otscore = jsonData.teams[1].score;
									t2g5otscore	= jsonData.teams[0].score;
								}

							}//end of OT if
			}else if(gamesP == 6){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//GAME 3
				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1

				//get OT scores from game 2
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 4 HALF 1
						splitUrl = g4h1eulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);


						g4mapname = jsonData.map.name;
						if(jsonData.teams[0].name == t1abr){
							//team 0 for game is team 1
							t1g4h1score = jsonData.teams[0].score;
							t2g4h1score = jsonData.teams[1].score;
						}else{
							//team 0 for game is team 2
							t1g4h1score = jsonData.teams[1].score;
							t2g4h1score = jsonData.teams[0].score;
						}

						//get half 2 scores from game 1

					//get OT scores from game 2
						if(g4oteulink != 0){
							splitUrl = g4oteulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);

							if(jsonData.teams[0].name == t1abr){
								t1g4otscore = jsonData.teams[0].score;
								t2g4otscore	= jsonData.teams[1].score;
							}else{
								t1g4otscore = jsonData.teams[1].score;
								t2g4otscore	= jsonData.teams[0].score;
							}

						}//end of OT if

						//GAME 5 HALF 1
							splitUrl = g5h1eulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);


							g5mapname = jsonData.map.name;
							if(jsonData.teams[0].name == t1abr){
								//team 0 for game is team 1
								t1g5h1score = jsonData.teams[0].score;
								t2g5h1score = jsonData.teams[1].score;
							}else{
								//team 0 for game is team 2
								t1g5h1score = jsonData.teams[1].score;
								t2g5h1score = jsonData.teams[0].score;
							}

							//get half 2 scores from game 1

						//get OT scores from game 2
							if(g5oteulink != 0){
								splitUrl = g5oteulink.slice(18,40);
								finalString = baseUrl.concat(splitUrl);
								//loads JSON file from the EU

									response = await fetch(finalString);
									jsonData = await response.json();
									//jsonData = JSON.parse(jsonData);
									console.log(jsonData);

								if(jsonData.teams[0].name == t1abr){
									t1g5otscore = jsonData.teams[0].score;
									t2g5otscore	= jsonData.teams[1].score;
								}else{
									t1g5otscore = jsonData.teams[1].score;
									t2g5otscore	= jsonData.teams[0].score;
								}

							}//end of OT if
							//GAME 6 HALF 1
								splitUrl = g6h1eulink.slice(18,40);
								finalString = baseUrl.concat(splitUrl);
								//loads JSON file from the EU

									response = await fetch(finalString);
									jsonData = await response.json();
									//jsonData = JSON.parse(jsonData);
									console.log(jsonData);


								g6mapname = jsonData.map.name;
								if(jsonData.teams[0].name == t1abr){
									//team 0 for game is team 1
									t1g6h1score = jsonData.teams[0].score;
									t2g6h1score = jsonData.teams[1].score;
								}else{
									//team 0 for game is team 2
									t1g6h1score = jsonData.teams[1].score;
									t2g6h1score = jsonData.teams[0].score;
								}

								//get half 2 scores from game 1

							//get OT scores from game 2
								if(g6oteulink != 0){
									splitUrl = g6oteulink.slice(18,40);
									finalString = baseUrl.concat(splitUrl);
									//loads JSON file from the EU

										response = await fetch(finalString);
										jsonData = await response.json();
										//jsonData = JSON.parse(jsonData);
										console.log(jsonData);

									if(jsonData.teams[0].name == t1abr){
										t1g6otscore = jsonData.teams[0].score;
										t2g6otscore	= jsonData.teams[1].score;
									}else{
										t1g6otscore = jsonData.teams[1].score;
										t2g6otscore	= jsonData.teams[0].score;
									}

								}//end of OT if
			}else if(gamesP == 7){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//GAME 3
				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1

				//get OT scores from game 2
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 4 HALF 1
						splitUrl = g4h1eulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);


						g4mapname = jsonData.map.name;
						if(jsonData.teams[0].name == t1abr){
							//team 0 for game is team 1
							t1g4h1score = jsonData.teams[0].score;
							t2g4h1score = jsonData.teams[1].score;
						}else{
							//team 0 for game is team 2
							t1g4h1score = jsonData.teams[1].score;
							t2g4h1score = jsonData.teams[0].score;
						}

						//get half 2 scores from game 1

					//get OT scores from game 2
						if(g4oteulink != 0){
							splitUrl = g4oteulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);

							if(jsonData.teams[0].name == t1abr){
								t1g4otscore = jsonData.teams[0].score;
								t2g4otscore	= jsonData.teams[1].score;
							}else{
								t1g4otscore = jsonData.teams[1].score;
								t2g4otscore	= jsonData.teams[0].score;
							}

						}//end of OT if

						//GAME 5 HALF 1
							splitUrl = g5h1eulink.slice(18,40);
							finalString = baseUrl.concat(splitUrl);
							//loads JSON file from the EU

								response = await fetch(finalString);
								jsonData = await response.json();
								//jsonData = JSON.parse(jsonData);
								console.log(jsonData);


							g5mapname = jsonData.map.name;
							if(jsonData.teams[0].name == t1abr){
								//team 0 for game is team 1
								t1g5h1score = jsonData.teams[0].score;
								t2g5h1score = jsonData.teams[1].score;
							}else{
								//team 0 for game is team 2
								t1g5h1score = jsonData.teams[1].score;
								t2g5h1score = jsonData.teams[0].score;
							}

							//get half 2 scores from game 1

						//get OT scores from game 2
							if(g5oteulink != 0){
								splitUrl = g5oteulink.slice(18,40);
								finalString = baseUrl.concat(splitUrl);
								//loads JSON file from the EU

									response = await fetch(finalString);
									jsonData = await response.json();
									//jsonData = JSON.parse(jsonData);
									console.log(jsonData);

								if(jsonData.teams[0].name == t1abr){
									t1g5otscore = jsonData.teams[0].score;
									t2g5otscore	= jsonData.teams[1].score;
								}else{
									t1g5otscore = jsonData.teams[1].score;
									t2g5otscore	= jsonData.teams[0].score;
								}

							}//end of OT if
							//GAME 6 HALF 1
								splitUrl = g6h1eulink.slice(18,40);
								finalString = baseUrl.concat(splitUrl);
								//loads JSON file from the EU

									response = await fetch(finalString);
									jsonData = await response.json();
									//jsonData = JSON.parse(jsonData);
									console.log(jsonData);


								g6mapname = jsonData.map.name;
								if(jsonData.teams[0].name == t1abr){
									//team 0 for game is team 1
									t1g6h1score = jsonData.teams[0].score;
									t2g6h1score = jsonData.teams[1].score;
								}else{
									//team 0 for game is team 2
									t1g6h1score = jsonData.teams[1].score;
									t2g6h1score = jsonData.teams[0].score;
								}

								//get half 2 scores from game 1

							//get OT scores from game 2
								if(g6oteulink != 0){
									splitUrl = g6oteulink.slice(18,40);
									finalString = baseUrl.concat(splitUrl);
									//loads JSON file from the EU

										response = await fetch(finalString);
										jsonData = await response.json();
										//jsonData = JSON.parse(jsonData);
										console.log(jsonData);

									if(jsonData.teams[0].name == t1abr){
										t1g6otscore = jsonData.teams[0].score;
										t2g6otscore	= jsonData.teams[1].score;
									}else{
										t1g6otscore = jsonData.teams[1].score;
										t2g6otscore	= jsonData.teams[0].score;
									}

								}//end of OT if

								//GAME 7 HALF 1
									splitUrl = g7h1eulink.slice(18,40);
									finalString = baseUrl.concat(splitUrl);
									//loads JSON file from the EU

										response = await fetch(finalString);
										jsonData = await response.json();
										//jsonData = JSON.parse(jsonData);
										console.log(jsonData);


									g7mapname = jsonData.map.name;
									if(jsonData.teams[0].name == t1abr){
										//team 0 for game is team 1
										t1g7h1score = jsonData.teams[0].score;
										t2g7h1score = jsonData.teams[1].score;
									}else{
										//team 0 for game is team 2
										t1g7h1score = jsonData.teams[1].score;
										t2g7h1score = jsonData.teams[0].score;
									}

									//get half 2 scores from game 1

								//get OT scores from game 2
									if(g7oteulink != 0){
										splitUrl = g7oteulink.slice(18,40);
										finalString = baseUrl.concat(splitUrl);
										//loads JSON file from the EU

											response = await fetch(finalString);
											jsonData = await response.json();
											//jsonData = JSON.parse(jsonData);
											console.log(jsonData);

										if(jsonData.teams[0].name == t1abr){
											t1g7otscore = jsonData.teams[0].score;
											t2g7otscore	= jsonData.teams[1].score;
										}else{
											t1g7otscore = jsonData.teams[1].score;
											t2g7otscore	= jsonData.teams[0].score;
										}

									}//end of OT if
			}
		}else{
			if(gamesP == 2){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 1 HALF 2
				splitUrl = g1h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h2score = jsonData.teams[0].score;
					t2g1h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h2score = jsonData.teams[1].score;
					t2g1h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			//GAME 2
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 2 HALF 2
				splitUrl = g2h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h2score = jsonData.teams[0].score;
					t2g2h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h2score = jsonData.teams[1].score;
					t2g2h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 2
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

			}else if(gamesP == 3){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 1 HALF 2
				splitUrl = g1h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h2score = jsonData.teams[0].score;
					t2g1h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h2score = jsonData.teams[1].score;
					t2g1h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 2 HALF 2
				splitUrl = g2h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h2score = jsonData.teams[0].score;
					t2g2h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h2score = jsonData.teams[1].score;
					t2g2h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g2oteulink);
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 3 HALF 2
					splitUrl = g3h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h2score = jsonData.teams[0].score;
						t2g3h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h2score = jsonData.teams[1].score;
						t2g3h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g3oteulink);
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if


			}else if(gamesP == 4){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 1 HALF 2
				splitUrl = g1h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h2score = jsonData.teams[0].score;
					t2g1h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h2score = jsonData.teams[1].score;
					t2g1h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 2 HALF 2
				splitUrl = g2h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h2score = jsonData.teams[0].score;
					t2g2h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h2score = jsonData.teams[1].score;
					t2g2h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g2oteulink);
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 3 HALF 2
					splitUrl = g3h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h2score = jsonData.teams[0].score;
						t2g3h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h2score = jsonData.teams[1].score;
						t2g3h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g3oteulink);
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
					//GAME 4 HALF 1
					splitUrl = g4h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g4mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h1score = jsonData.teams[0].score;
						t2g4h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h1score = jsonData.teams[1].score;
						t2g4h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 4 HALF 2
					splitUrl = g4h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h2score = jsonData.teams[0].score;
						t2g4h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h2score = jsonData.teams[1].score;
						t2g4h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g4oteulink);
					if(g4oteulink != 0){
						splitUrl = g4oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g4otscore = jsonData.teams[0].score;
							t2g4otscore	= jsonData.teams[1].score;
						}else{
							t1g4otscore = jsonData.teams[1].score;
							t2g4otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

			}else if(gamesP == 5){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 1 HALF 2
				splitUrl = g1h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h2score = jsonData.teams[0].score;
					t2g1h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h2score = jsonData.teams[1].score;
					t2g1h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 2 HALF 2
				splitUrl = g2h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h2score = jsonData.teams[0].score;
					t2g2h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h2score = jsonData.teams[1].score;
					t2g2h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g2oteulink);
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 3 HALF 2
					splitUrl = g3h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h2score = jsonData.teams[0].score;
						t2g3h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h2score = jsonData.teams[1].score;
						t2g3h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g3oteulink);
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
					//GAME 4 HALF 1
					splitUrl = g4h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g4mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h1score = jsonData.teams[0].score;
						t2g4h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h1score = jsonData.teams[1].score;
						t2g4h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 4 HALF 2
					splitUrl = g4h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h2score = jsonData.teams[0].score;
						t2g4h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h2score = jsonData.teams[1].score;
						t2g4h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g4oteulink);
					if(g4oteulink != 0){
						splitUrl = g4oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g4otscore = jsonData.teams[0].score;
							t2g4otscore	= jsonData.teams[1].score;
						}else{
							t1g4otscore = jsonData.teams[1].score;
							t2g4otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 5 HALF 1
					splitUrl = g5h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g5mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g5h1score = jsonData.teams[0].score;
						t2g5h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g5h1score = jsonData.teams[1].score;
						t2g5h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 5  HALF 2
					splitUrl = g5h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g5h2score = jsonData.teams[0].score;
						t2g5h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g5h2score = jsonData.teams[1].score;
						t2g5h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g5oteulink);
					if(g5oteulink != 0){
						splitUrl = g5oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g5otscore = jsonData.teams[0].score;
							t2g5otscore	= jsonData.teams[1].score;
						}else{
							t1g5otscore = jsonData.teams[1].score;
							t2g5otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
			}else if(gamesP == 6){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 1 HALF 2
				splitUrl = g1h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h2score = jsonData.teams[0].score;
					t2g1h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h2score = jsonData.teams[1].score;
					t2g1h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 2 HALF 2
				splitUrl = g2h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h2score = jsonData.teams[0].score;
					t2g2h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h2score = jsonData.teams[1].score;
					t2g2h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g2oteulink);
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 3 HALF 2
					splitUrl = g3h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h2score = jsonData.teams[0].score;
						t2g3h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h2score = jsonData.teams[1].score;
						t2g3h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g3oteulink);
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
					//GAME 4 HALF 1
					splitUrl = g4h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g4mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h1score = jsonData.teams[0].score;
						t2g4h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h1score = jsonData.teams[1].score;
						t2g4h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 4 HALF 2
					splitUrl = g4h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h2score = jsonData.teams[0].score;
						t2g4h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h2score = jsonData.teams[1].score;
						t2g4h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g4oteulink);
					if(g4oteulink != 0){
						splitUrl = g4oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g4otscore = jsonData.teams[0].score;
							t2g4otscore	= jsonData.teams[1].score;
						}else{
							t1g4otscore = jsonData.teams[1].score;
							t2g4otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 5 HALF 1
					splitUrl = g5h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g5mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g5h1score = jsonData.teams[0].score;
						t2g5h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g5h1score = jsonData.teams[1].score;
						t2g5h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 5  HALF 2
					splitUrl = g5h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g5h2score = jsonData.teams[0].score;
						t2g5h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g5h2score = jsonData.teams[1].score;
						t2g5h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g5oteulink);
					if(g5oteulink != 0){
						splitUrl = g5oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g5otscore = jsonData.teams[0].score;
							t2g5otscore	= jsonData.teams[1].score;
						}else{
							t1g5otscore = jsonData.teams[1].score;
							t2g5otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 6 HALF 1
					splitUrl = g6h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g6mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g6h1score = jsonData.teams[0].score;
						t2g6h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g6h1score = jsonData.teams[1].score;
						t2g6h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 6  HALF 2
					splitUrl = g6h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g6h2score = jsonData.teams[0].score;
						t2g6h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g6h2score = jsonData.teams[1].score;
						t2g6h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g6oteulink);
					if(g6oteulink != 0){
						splitUrl = g6oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g6otscore = jsonData.teams[0].score;
							t2g6otscore	= jsonData.teams[1].score;
						}else{
							t1g6otscore = jsonData.teams[1].score;
							t2g6otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
			}else if(gamesP == 7){
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 1 HALF 1
				splitUrl = g1h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g1mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h1score = jsonData.teams[0].score;
					t2g1h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h1score = jsonData.teams[1].score;
					t2g1h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 1 HALF 2
				splitUrl = g1h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g1h2score = jsonData.teams[0].score;
					t2g1h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g1h2score = jsonData.teams[1].score;
					t2g1h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g1oteulink);
				if(g1oteulink != 0){
					splitUrl = g1oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g1otscore = jsonData.teams[0].score;
						t2g1otscore	= jsonData.teams[1].score;
					}else{
						t1g1otscore = jsonData.teams[1].score;
						t2g1otscore	= jsonData.teams[0].score;
					}

				}//end of OT if
				//get scores from Eu if play offs are disabled
				//Get half 1 scores from game 1
			//GAME 2 HALF 1
				splitUrl = g2h1eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				g2mapname = jsonData.map.name;
				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h1score = jsonData.teams[0].score;
					t2g2h1score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h1score = jsonData.teams[1].score;
					t2g2h1score = jsonData.teams[0].score;
				}

				//get half 2 scores from game 1
			//GAME 2 HALF 2
				splitUrl = g2h2eulink.slice(18,40);
				finalString = baseUrl.concat(splitUrl);
				//loads JSON file from the EU

					response = await fetch(finalString);
					jsonData = await response.json();
					//jsonData = JSON.parse(jsonData);
					console.log(jsonData);


				if(jsonData.teams[0].name == t1abr){
					//team 0 for game is team 1
					t1g2h2score = jsonData.teams[0].score;
					t2g2h2score = jsonData.teams[1].score;
				}else{
					//team 0 for game is team 2
					t1g2h2score = jsonData.teams[1].score;
					t2g2h2score = jsonData.teams[0].score;
				}

			//get OT scores from game 1
			console.log(g2oteulink);
				if(g2oteulink != 0){
					splitUrl = g2oteulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);

					if(jsonData.teams[0].name == t1abr){
						t1g2otscore = jsonData.teams[0].score;
						t2g2otscore	= jsonData.teams[1].score;
					}else{
						t1g2otscore = jsonData.teams[1].score;
						t2g2otscore	= jsonData.teams[0].score;
					}

				}//end of OT if

				//GAME 3 HALF 1
					splitUrl = g3h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g3mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h1score = jsonData.teams[0].score;
						t2g3h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h1score = jsonData.teams[1].score;
						t2g3h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 3 HALF 2
					splitUrl = g3h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g3h2score = jsonData.teams[0].score;
						t2g3h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g3h2score = jsonData.teams[1].score;
						t2g3h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g3oteulink);
					if(g3oteulink != 0){
						splitUrl = g3oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g3otscore = jsonData.teams[0].score;
							t2g3otscore	= jsonData.teams[1].score;
						}else{
							t1g3otscore = jsonData.teams[1].score;
							t2g3otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
					//GAME 4 HALF 1
					splitUrl = g4h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g4mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h1score = jsonData.teams[0].score;
						t2g4h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h1score = jsonData.teams[1].score;
						t2g4h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 4 HALF 2
					splitUrl = g4h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g4h2score = jsonData.teams[0].score;
						t2g4h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g4h2score = jsonData.teams[1].score;
						t2g4h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g4oteulink);
					if(g4oteulink != 0){
						splitUrl = g4oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g4otscore = jsonData.teams[0].score;
							t2g4otscore	= jsonData.teams[1].score;
						}else{
							t1g4otscore = jsonData.teams[1].score;
							t2g4otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 5 HALF 1
					splitUrl = g5h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g5mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g5h1score = jsonData.teams[0].score;
						t2g5h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g5h1score = jsonData.teams[1].score;
						t2g5h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 5  HALF 2
					splitUrl = g5h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g5h2score = jsonData.teams[0].score;
						t2g5h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g5h2score = jsonData.teams[1].score;
						t2g5h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g5oteulink);
					if(g5oteulink != 0){
						splitUrl = g5oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g5otscore = jsonData.teams[0].score;
							t2g5otscore	= jsonData.teams[1].score;
						}else{
							t1g5otscore = jsonData.teams[1].score;
							t2g5otscore	= jsonData.teams[0].score;
						}

					}//end of OT if

					//GAME 6 HALF 1
					splitUrl = g6h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g6mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g6h1score = jsonData.teams[0].score;
						t2g6h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g6h1score = jsonData.teams[1].score;
						t2g6h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 6  HALF 2
					splitUrl = g6h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g6h2score = jsonData.teams[0].score;
						t2g6h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g6h2score = jsonData.teams[1].score;
						t2g6h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g6oteulink);
					if(g6oteulink != 0){
						splitUrl = g6oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g6otscore = jsonData.teams[0].score;
							t2g6otscore	= jsonData.teams[1].score;
						}else{
							t1g6otscore = jsonData.teams[1].score;
							t2g6otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
					//GAME 6 HALF 1
					splitUrl = g7h1eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					g7mapname = jsonData.map.name;
					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g7h1score = jsonData.teams[0].score;
						t2g7h1score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g7h1score = jsonData.teams[1].score;
						t2g7h1score = jsonData.teams[0].score;
					}

					//get half 2 scores from game 1
				//GAME 6  HALF 2
					splitUrl = g7h2eulink.slice(18,40);
					finalString = baseUrl.concat(splitUrl);
					//loads JSON file from the EU

						response = await fetch(finalString);
						jsonData = await response.json();
						//jsonData = JSON.parse(jsonData);
						console.log(jsonData);


					if(jsonData.teams[0].name == t1abr){
						//team 0 for game is team 1
						t1g7h2score = jsonData.teams[0].score;
						t2g7h2score = jsonData.teams[1].score;
					}else{
						//team 0 for game is team 2
						t1g7h2score = jsonData.teams[1].score;
						t2g7h2score = jsonData.teams[0].score;
					}

				//get OT scores from game 1
				console.log(g7oteulink);
					if(g7oteulink != 0){
						splitUrl = g7oteulink.slice(18,40);
						finalString = baseUrl.concat(splitUrl);
						//loads JSON file from the EU

							response = await fetch(finalString);
							jsonData = await response.json();
							//jsonData = JSON.parse(jsonData);
							console.log(jsonData);

						if(jsonData.teams[0].name == t1abr){
							t1g7otscore = jsonData.teams[0].score;
							t2g7otscore	= jsonData.teams[1].score;
						}else{
							t1g7otscore = jsonData.teams[1].score;
							t2g7otscore	= jsonData.teams[0].score;
						}

					}//end of OT if
			}

		}//end of else

		computeAgg();

	})();
}
//end of function

function generateText(){
	t1name =document.getElementById("t1n").value;
	t1name = t1name.trim();
	t1abr = document.getElementById("t1a").value;
	t1abr = t1abr.trim();
	t2name =document.getElementById("t2n").value;
	t2name = t2name.trim();
	t2abr = document.getElementById("t2a").value;
	t2abr = t2abr.trim();
	sname = document.getElementById("sname").value;
	slink = document.getElementById("slink").value;

	if(gamesP == 2){
		//generate text for 2 games
		//game 1
		//g1mapname = document.getElementById("g1m").value;
		//half1
		//t1g1h1score = document.getElementById("t1g1h1").value;
		//t2g1h1score = document.getElementById("t2g1h1").value;
		g1h1eulink = document.getElementById("g1h1eu").value;
		//half2
		//t1g1h2score = document.getElementById("t1g1h2").value;
		//t2g1h2score = document.getElementById("t2g1h2").value;
		g1h2eulink = document.getElementById("g1h2eu").value;
		//overtime
		//t1g1otscore = document.getElementById("t1g1ot").value;
		//t2g1otscore = document.getElementById("t2g1ot").value;
		g1oteulink = document.getElementById("g1oteu").value;

		//game 2
		//g2mapname = document.getElementById("g2m").value;
		//half1
		//t1g2h1score = document.getElementById("t1g2h1").value;
		//t2g2h1score = document.getElementById("t2g2h1").value;
		g2h1eulink = document.getElementById("g2h1eu").value;
		//half2
		//t1g2h2score = document.getElementById("t1g2h2").value;
		//t2g2h2score = document.getElementById("t2g2h2").value;
		g2h2eulink = document.getElementById("g2h2eu").value;
		//overtime
		//t1g2otscore = document.getElementById("t1g2ot").value;
		//t2g2otscore = document.getElementById("t2g2ot").value;
		g2oteulink = document.getElementById("g2oteu").value;
	}else if(gamesP == 3){
		//generate text for 3 games
		//game 1
		//g1mapname = document.getElementById("g1m").value;
		//half1
		//t1g1h1score = document.getElementById("t1g1h1").value;
		//t2g1h1score = document.getElementById("t2g1h1").value;
		g1h1eulink = document.getElementById("g1h1eu").value;
		//half2
		//t1g1h2score = document.getElementById("t1g1h2").value;
		//t2g1h2score = document.getElementById("t2g1h2").value;
		g1h2eulink = document.getElementById("g1h2eu").value;
		//overtime
		//t1g1otscore = document.getElementById("t1g1ot").value;
		//t2g1otscore = document.getElementById("t2g1ot").value;
		g1oteulink = document.getElementById("g1oteu").value;

		//game 2
		//g2mapname = document.getElementById("g2m").value;
		//half1
		//t2g2h1score = document.getElementById("t2g2h1").value;
		//t1g2h1score = document.getElementById("t1g2h1").value;
		g2h1eulink = document.getElementById("g2h1eu").value;
		//half2
		//t1g2h2score = document.getElementById("t1g2h2").value;
		//t2g2h2score = document.getElementById("t2g2h2").value;
		g2h2eulink = document.getElementById("g2h2eu").value;
		//overtime
		//t1g2otscore = document.getElementById("t1g2ot").value;
		//t2g2otscore = document.getElementById("t2g2ot").value;
		g2oteulink = document.getElementById("g2oteu").value;

		//game 3
		//g3mapname = document.getElementById("g3m").value;
		//half1
		//t1g3h1score = document.getElementById("t1g3h1").value;
		//t2g3h1score = document.getElementById("t2g3h1").value;
		g3h1eulink = document.getElementById("g3h1eu").value;
		//half2
		//t1g3h2score = document.getElementById("t1g3h2").value;
		//t2g3h2score = document.getElementById("t2g3h2").value;
		g3h2eulink = document.getElementById("g3h2eu").value;
		//overtime
		//t1g3otscore = document.getElementById("t1g3ot").value;
		//t2g3otscore = document.getElementById("t2g3ot").value;
		g3oteulink = document.getElementById("g3oteu").value;
	}else if(gamesP == 4){
		//generate text for 4 games
		//game 1
		//g1mapname = document.getElementById("g1m").value;
		//half1
		//t1g1h1score = document.getElementById("t1g1h1").value;
		//t2g1h1score = document.getElementById("t2g1h1").value;
		g1h1eulink = document.getElementById("g1h1eu").value;
		//half2
		//t1g1h2score = document.getElementById("t1g1h2").value;
		//t2g1h2score = document.getElementById("t2g1h2").value;
		g1h2eulink = document.getElementById("g1h2eu").value;
		//overtime
		//t1g1otscore = document.getElementById("t1g1ot").value;
		//t2g1otscore = document.getElementById("t2g1ot").value;
		g1oteulink = document.getElementById("g1oteu").value;

		//game 2
		//g2mapname = document.getElementById("g2m").value;
		//half1
		//t1g2h1score = document.getElementById("t1g2h1").value;
		//t2g2h1score = document.getElementById("t2g2h1").value;
		g2h1eulink = document.getElementById("g2h1eu").value;
		//half2
		//t1g2h2score = document.getElementById("t1g2h2").value;
		//t2g2h2score = document.getElementById("t2g2h2").value;
		g2h2eulink = document.getElementById("g2h2eu").value;
		//overtime
		//t1g2otscore = document.getElementById("t1g2ot").value;
		//t2g2otscore = document.getElementById("t2g2ot").value;
		g2oteulink = document.getElementById("g2oteu").value;

		//game 3
	//	g3mapname = document.getElementById("g3m").value;
		//half1
		//t1g3h1score = document.getElementById("t1g3h1").value;
		//t2g3h1score = document.getElementById("t2g3h1").value;
		g3h1eulink = document.getElementById("g3h1eu").value;
		//half2
		//t1g3h2score = document.getElementById("t1g3h2").value;
		//t2g3h2score = document.getElementById("t2g3h2").value;
		g3h2eulink = document.getElementById("g3h2eu").value;
		//overtime
		//t1g3otscore = document.getElementById("t1g3ot").value;
		//t2g3otscore = document.getElementById("t2g3ot").value;
		g3oteulink = document.getElementById("g3oteu").value;

		//game 4
	//	g4mapname = document.getElementById("g4m").value;
		//half1
		//t1g4h1score = document.getElementById("t1g4h1").value;
		//t2g4h1score = document.getElementById("t2g4h1").value;
		g4h1eulink = document.getElementById("g4h1eu").value;
		//half2
		//t1g4h2score = document.getElementById("t1g4h2").value;
		//t2g4h2score = document.getElementById("t2g4h2").value;
		g4h2eulink = document.getElementById("g4h2eu").value;
		//overtime
		//t1g4otscore = document.getElementById("t1g4ot").value;
		//t2g4otscore = document.getElementById("t2g4ot").value;
		g4oteulink = document.getElementById("g4oteu").value;



	}else if(gamesP == 5){
		//generate text for 5 games
		//game 1
	//	g1mapname = document.getElementById("g1m").value;
		//half1
	//	t1g1h1score = document.getElementById("t1g1h1").value;
	//	t2g1h1score = document.getElementById("t2g1h1").value;
		g1h1eulink = document.getElementById("g1h1eu").value;
		//half2
	//	t1g1h2score = document.getElementById("t1g1h2").value;
	//	t2g1h2score = document.getElementById("t2g1h2").value;
		g1h2eulink = document.getElementById("g1h2eu").value;
		//overtime
	//	t1g1otscore = document.getElementById("t1g1ot").value;
	//	t2g1otscore = document.getElementById("t2g1ot").value;
		g1oteulink = document.getElementById("g1oteu").value;

		//game 2
	//	g2mapname = document.getElementById("g2m").value;
		//half1
	//	t1g2h1score = document.getElementById("t1g2h1").value;
	//	t2g2h1score = document.getElementById("t2g2h1").value;
		g2h1eulink = document.getElementById("g2h1eu").value;
		//half2
	//	t1g2h2score = document.getElementById("t1g2h2").value;
	//	t2g2h2score = document.getElementById("t2g2h2").value;
		g2h2eulink = document.getElementById("g2h2eu").value;
		//overtime
	//	t1g2otscore = document.getElementById("t1g2ot").value;
	//	t2g2otscore = document.getElementById("t2g2ot").value;
		g2oteulink = document.getElementById("g2oteu").value;

		//game 3
//		g3mapname = document.getElementById("g3m").value;
		//half1
	//	t1g3h1score = document.getElementById("t1g3h1").value;
	//	t2g3h1score = document.getElementById("t2g3h1").value;
		g3h1eulink = document.getElementById("g3h1eu").value;
		//half2
	//	t1g3h2score = document.getElementById("t1g3h2").value;
	//	t2g3h2score = document.getElementById("t2g3h2").value;
		g3h2eulink = document.getElementById("g3h2eu").value;
		//overtime
	//	t1g3otscore = document.getElementById("t1g3ot").value;
	//	t2g3otscore = document.getElementById("t2g3ot").value;
		g3oteulink = document.getElementById("g3oteu").value;

		//game 4
	//	g4mapname = document.getElementById("g4m").value;
		//half1
	//	t1g4h1score = document.getElementById("t1g4h1").value;
	//	t2g4h1score = document.getElementById("t2g4h1").value;
		g4h1eulink = document.getElementById("g4h1eu").value;
		//half2
	//	t1g4h2score = document.getElementById("t1g4h2").value;
	//	t2g4h2score = document.getElementById("t2g4h2").value;
		g4h2eulink = document.getElementById("g4h2eu").value;
		//overtime
	//	t1g4otscore = document.getElementById("t1g4ot").value;
	//	t2g4otscore = document.getElementById("t2g4ot").value;
		g4oteulink = document.getElementById("g4oteu").value;

		//game 5
	//	g5mapname = document.getElementById("g5m").value;
		//half1
	//	t1g5h1score = document.getElementById("t1g5h1").value;
	//	t2g5h1score = document.getElementById("t2g5h1").value;
		g5h1eulink = document.getElementById("g5h1eu").value;
		//half2
	//	t1g5h2score = document.getElementById("t1g5h2").value;
	//	t2g5h2score = document.getElementById("t2g5h2").value;
		g5h2eulink = document.getElementById("g5h2eu").value;
		//overtime
	//	t1g5otscore = document.getElementById("t1g5ot").value;
	//	t2g5otscore = document.getElementById("t2g5ot").value;
		g5oteulink = document.getElementById("g5oteu").value;

	}else if(gamesP == 6){
		//generate text for 6 games
		//game 1
	//	g1mapname = document.getElementById("g1m").value;
		//half1
	//	t1g1h1score = document.getElementById("t1g1h1").value;
	//	t2g1h1score = document.getElementById("t2g1h1").value;
		g1h1eulink = document.getElementById("g1h1eu").value;
		//half2
	//	t1g1h2score = document.getElementById("t1g1h2").value;
	//	t2g1h2score = document.getElementById("t2g1h2").value;
		g1h2eulink = document.getElementById("g1h2eu").value;
		//overtime
	//	t1g1otscore = document.getElementById("t1g1ot").value;
	//	t2g1otscore = document.getElementById("t2g1ot").value;
		g1oteulink = document.getElementById("g1oteu").value;

		//game 2
	//	g2mapname = document.getElementById("g2m").value;
		//half1
	//	t1g2h1score = document.getElementById("t1g2h1").value;
	//	t2g2h1score = document.getElementById("t2g2h1").value;
		g2h1eulink = document.getElementById("g2h1eu").value;
		//half2
		//t1g2h2score = document.getElementById("t1g2h2").value;
	//	t2g2h2score = document.getElementById("t2g2h2").value;
		g2h2eulink = document.getElementById("g2h2eu").value;
		//overtime
	//	t1g2otscore = document.getElementById("t1g2ot").value;
	//	t2g2otscore = document.getElementById("t2g2ot").value;
		g2oteulink = document.getElementById("g2oteu").value;

		//game 3
	//	g3mapname = document.getElementById("g3m").value;
		//half1
	//	t1g3h1score = document.getElementById("t1g3h1").value;
	//	t2g3h1score = document.getElementById("t2g3h1").value;
		g3h1eulink = document.getElementById("g3h1eu").value;
		//half2
	//	t1g3h2score = document.getElementById("t1g3h2").value;
	//	t2g3h2score = document.getElementById("t2g3h2").value;
		g3h2eulink = document.getElementById("g3h2eu").value;
		//overtime
	//	t1g3otscore = document.getElementById("t1g3ot").value;
	//	t2g3otscore = document.getElementById("t2g3ot").value;
		g3oteulink = document.getElementById("g3oteu").value;

		//game 4
//		g4mapname = document.getElementById("g4m").value;
		//half1
	//	t1g4h1score = document.getElementById("t1g4h1").value;
	//	t2g4h1score = document.getElementById("t2g4h1").value;
		g4h1eulink = document.getElementById("g4h1eu").value;
		//half2
	//	t1g4h2score = document.getElementById("t1g4h2").value;
	//	t2g4h2score = document.getElementById("t2g4h2").value;
		g4h2eulink = document.getElementById("g4h2eu").value;
		//overtime
	//	t1g4otscore = document.getElementById("t1g4ot").value;
	//	t2g4otscore = document.getElementById("t2g4ot").value;
		g4oteulink = document.getElementById("g4oteu").value;

		//game 5
//		g5mapname = document.getElementById("g5m").value;
		//half1
	//	t1g5h1score = document.getElementById("t1g5h1").value;
	//	t2g5h1score = document.getElementById("t2g5h1").value;
		g5h1eulink = document.getElementById("g5h1eu").value;
		//half2
	//	t1g5h2score = document.getElementById("t1g5h2").value;
	//	t2g5h2score = document.getElementById("t2g5h2").value;
		g5h2eulink = document.getElementById("g5h2eu").value;
		//overtime
	//	t1g5otscore = document.getElementById("t1g5ot").value;
	//	t2g5otscore = document.getElementById("t2g5ot").value;
		g5oteulink = document.getElementById("g5oteu").value;

		//game 6
//		g6mapname = document.getElementById("g6m").value;
		//half1
	//	t1g6h1score = document.getElementById("t1g6h1").value;
	//	t2g6h1score = document.getElementById("t2g6h1").value;
		g6h1eulink = document.getElementById("g6h1eu").value;
		//half2
	//	t1g6h2score = document.getElementById("t1g6h2").value;
	//	t2g6h2score = document.getElementById("t2g6h2").value;
		g6h2eulink = document.getElementById("g6h2eu").value;
		//overtime
	//	t1g6otscore = document.getElementById("t1g6ot").value;
	//	t2g6otscore = document.getElementById("t2g6ot").value;
		g6oteulink = document.getElementById("g6oteu").value;

	}
	else if(gamesP == 7){
		//generate text for 7 games
		//game 1
//		g1mapname = document.getElementById("g1m").value;
		//half1
	//	t1g1h1score = document.getElementById("t1g1h1").value;
	//	t2g1h1score = document.getElementById("t2g1h1").value;
		g1h1eulink = document.getElementById("g1h1eu").value;
		//half2
	//	t1g1h2score = document.getElementById("t1g1h2").value;
	//	t2g1h2score = document.getElementById("t2g1h2").value;
		g1h2eulink = document.getElementById("g1h2eu").value;
		//overtime
	//	t1g1otscore = document.getElementById("t1g1ot").value;
	//	t2g1otscore = document.getElementById("t2g1ot").value;
		g1oteulink = document.getElementById("g1oteu").value;

		//game 2
	//	g2mapname = document.getElementById("g2m").value;
		//half1
	//	t1g2h1score = document.getElementById("t1g2h1").value;
	//	t2g2h1score = document.getElementById("t2g2h1").value;
		g2h1eulink = document.getElementById("g2h1eu").value;
		//half2
	//	t1g2h2score = document.getElementById("t1g2h2").value;
	//	t2g2h2score = document.getElementById("t2g2h2").value;
		g2h2eulink = document.getElementById("g2h2eu").value;
		//overtime
	//	t1g2otscore = document.getElementById("t1g2ot").value;
	//	t2g2otscore = document.getElementById("t2g2ot").value;
		g2oteulink = document.getElementById("g2oteu").value;

		//game 3
//		g3mapname = document.getElementById("g3m").value;
		//half1
	//	t1g3h1score = document.getElementById("t1g3h1").value;
	//	t2g3h1score = document.getElementById("t2g3h1").value;
		g3h1eulink = document.getElementById("g3h1eu").value;
		//half2
	//	t1g3h2score = document.getElementById("t1g3h2").value;
	//	t2g3h2score = document.getElementById("t2g3h2").value;
		g3h2eulink = document.getElementById("g3h2eu").value;
		//overtime
	//	t1g3otscore = document.getElementById("t1g3ot").value;
	//	t2g3otscore = document.getElementById("t2g3ot").value;
		g3oteulink = document.getElementById("g3oteu").value;

		//game 4
//		g4mapname = document.getElementById("g4m").value;
		//half1
	//	t1g4h1score = document.getElementById("t1g4h1").value;
	//	t2g4h1score = document.getElementById("t2g4h1").value;
		g4h1eulink = document.getElementById("g4h1eu").value;
		//half2
	//	t1g4h2score = document.getElementById("t1g4h2").value;
	//	t2g4h2score = document.getElementById("t2g4h2").value;
		g4h2eulink = document.getElementById("g4h2eu").value;
		//overtime
	//	t1g4otscore = document.getElementById("t1g4ot").value;
	//	t2g4otscore = document.getElementById("t2g4ot").value;
		g4oteulink = document.getElementById("g4oteu").value;

		//game 5
//		g5mapname = document.getElementById("g5m").value;
		//half1
	//	t1g5h1score = document.getElementById("t1g5h1").value;
	//	t2g5h1score = document.getElementById("t2g5h1").value;
		g5h1eulink = document.getElementById("g5h1eu").value;
		//half2
	//	t1g5h2score = document.getElementById("t1g5h2").value;
	//	t2g5h2score = document.getElementById("t2g5h2").value;
		g5h2eulink = document.getElementById("g5h2eu").value;
		//overtime
	//	t1g5otscore = document.getElementById("t1g5ot").value;
	//	t2g5otscore = document.getElementById("t2g5ot").value;
		g5oteulink = document.getElementById("g5oteu").value;

		//game 6
//		g6mapname = document.getElementById("g6m").value;
		//half1
	//	t1g6h1score = document.getElementById("t1g6h1").value;
	//	t2g6h1score = document.getElementById("t2g6h1").value;
		g6h1eulink = document.getElementById("g6h1eu").value;
		//half2
	//	t1g6h2score = document.getElementById("t1g6h2").value;
	//	t2g6h2score = document.getElementById("t2g6h2").value;
		g6h2eulink = document.getElementById("g6h2eu").value;
		//overtime
	//	t1g6otscore = document.getElementById("t1g6ot").value;
	//	t2g6otscore = document.getElementById("t2g6ot").value;
		g6oteulink = document.getElementById("g6oteu").value;

		//game 7
	//	g7mapname = document.getElementById("g7m").value;
		//half1
	//	t1g7h1score = document.getElementById("t1g7h1").value;
	//	t2g7h1score = document.getElementById("t2g7h1").value;
		g7h1eulink = document.getElementById("g7h1eu").value;
		//half2
	//	t1g7h2score = document.getElementById("t1g7h2").value;
	//	t2g7h2score = document.getElementById("t2g7h2").value;
		g7h2eulink = document.getElementById("g7h2eu").value;
		//overtime
	//	t1g7otscore = document.getElementById("t1g7ot").value;
	//	t2g7otscore = document.getElementById("t2g7ot").value;
		g7oteulink = document.getElementById("g7oteu").value;
	}
	//Generate scores here
	getScoresFromEu();






	//drawText();
}

function computeAgg(){

	g1t1agg = t1g1h1score+ t1g1h2score +t1g1otscore;
	g1t2agg = t2g1h1score+ t2g1h2score +t2g1otscore;

	g2t1agg = t1g2h1score+ t1g2h2score +t1g2otscore;
	g2t2agg = t2g2h1score+ t2g2h2score +t2g2otscore;

	g3t1agg = t1g3h1score+ t1g3h2score +t1g3otscore;
	g3t2agg = t2g3h1score+ t2g3h2score +t2g3otscore;

	g4t1agg = t1g4h1score +t1g4h2score  +t1g4otscore;
	g4t2agg = t2g4h1score +t2g4h2score  +t2g4otscore;

	g5t1agg = t1g5h1score +t1g5h2score +t1g5otscore;
	g5t2agg = t2g5h1score +t2g5h2score +t2g5otscore;

	g6t1agg = t1g6h1score +t1g6h2score  +t1g6otscore;
	g6t2agg = t2g6h1score +t2g6h2score  +t2g6otscore;

	g7t1agg = t1g7h1score +t1g7h2score  +t1g7otscore;
	g7t2agg = t2g7h1score +t2g7h2score +t2g7otscore;



	if(g1t1agg > g1t2agg){
		t1abrg1 = "**"+t1abr+"**";
		t2abrg1 = t2abr;
		t1seriesagg2++;
	}else if(g1t2agg > g1t1agg){
		t2abrg1 = "**"+t2abr+"**";
		t1abrg1 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg1 = t1abr;
		t2abrg1 = t2abr;
	}


	if(g2t1agg > g2t2agg){
		t1abrg2 = "**"+t1abr+"**";
		t2abrg2 = t2abr;
		t1seriesagg2++;
	}else if(g2t2agg > g2t1agg){
		t2abrg2 = "**"+t2abr+"**";
		t1abrg2 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg2 = t1abr;
		t2abrg2 = t2abr;
	}

	if(g3t1agg > g3t2agg){
		t1abrg3 = "**"+t1abr+"**";
		t2abrg3 = t2abr;
		t1seriesagg2++;
	}else if(g3t2agg > g3t1agg){
		t2abrg3 = "**"+t2abr+"**";
		t1abrg3 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg3 = t1abr;
		t2abrg3 = t2abr;
	}

	if(g4t1agg > g4t2agg){
		t1abrg4 = "**"+t1abr+"**";
		t2abrg4 = t2abr;
		t1seriesagg2++;
	}else if(g4t2agg > g4t1agg){
		t2abrg4 = "**"+t2abr+"**";
		t1abrg4 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg4 = t1abr;
		t2abrg4 = t2abr;
	}

	if(g5t1agg > g5t2agg){
		t1abrg5 = "**"+t1abr+"**";
		t2abrg5 = t2abr;
		t1seriesagg2++;
	}else if(g5t2agg > g5t1agg){
		t2abrg5 = "**"+t2abr+"**";
		t1abrg5 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg5 = t1abr;
		t2abrg5 = t2abr;
	}

	if(g6t1agg > g6t2agg){
		t1abrg6 = "**"+t1abr+"**";
		t2abrg6 = t2abr;
		t1seriesagg2++;
	}else if(g6t2agg > g6t1agg){
		t2abrg6 = "**"+t2abr+"**";
		t1abrg6 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg6 = t1abr;
		t2abrg6 = t2abr;
	}

	if(g7t1agg > g7t2agg){
		t1abrg7 = "**"+t1abr+"**";
		t2abrg7 = t2abr;
		t1seriesagg2++;
	}else if(g7t2agg > g7t1agg){
		t2abrg7 = "**"+t2abr+"**";
		t1abrg7 = t1abr;
		t2seriesagg2++;
	}else{
		t1abrg7 = t1abr;
		t2abrg7 = t2abr;
	}

	if(t1seriesagg2 > t2seriesagg2){
		serieswint1abr = "**"+t1abr+"**";
		serieswint2abr = t2abr;
	}else{
		serieswint2abr = "**"+t2abr+"**";
		serieswint1abr = t1abr;
	}
	if(document.getElementById("g1ot").checked){
		g1otstring ="[**G1OT**]("+g1oteulink+")";
	}
	else{
		g1otstring = "";
	}
	if(document.getElementById("g2ot").checked){
		g2otstring ="[**G2OT**]("+g2oteulink+")";
	}
	else{
		g2otstring = "";
	}
	if(document.getElementById("g3ot").checked){
		g3otstring ="[**G3OT**]("+g3oteulink+")";
	}
	else{
		g3otstring = "";
	}
	if(document.getElementById("g4ot").checked){
		g4otstring ="[**G4OT**]("+g4oteulink+")";
	}
	else{
		g4otstring = "";
	}
	if(document.getElementById("g5ot").checked){
		g5otstring ="[**G5OT**]("+g5oteulink+")";
	}
	else{
		g5otstring = "";
	}
	if(document.getElementById("g6ot").checked){
		g6otstring ="[**G6OT**]("+g6oteulink+")";
	}
	else{
		g6otstring = "";
	}
	if(document.getElementById("g7ot").checked){
		g7otstring ="[**G7OT**]("+g7oteulink+")";
	}
	else{
		g7otstring = "";
	}

	drawPic();
	share();
}

function drawText(){
	if(plyoff == 1){
		 if(gamesP == 2){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")||"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"||"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"||"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")||"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"||"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"||"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|Series|"+serieswint1abr+": "+t1seriesagg2+"|||"+serieswint2abr+": "+t2seriesagg2+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 3){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")||"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"||"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"||"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")||"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"||"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"||"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")||"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"||"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"||"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|Series|"+serieswint1abr+": "+t1seriesagg2+"|||"+serieswint2abr+": "+t2seriesagg2+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 4){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")||"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"||"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"||"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")||"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"||"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"||"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")||"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"||"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"||"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")||"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"||"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"||"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|Series|"+serieswint1abr+": "+t1seriesagg2+"|||"+serieswint2abr+": "+t2seriesagg2+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 5){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")||"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"||"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"||"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")||"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"||"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"||"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")||"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"||"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"||"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")||"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"||"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"||"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|**"+g5mapname+"**|[**G5H1**]("+g5h1eulink+")||"+g5otstring+"|***END***|"+
			"\n|"+t1abrg5+"|"+t1g5h1score+"||"+t1g5otscore+"|"+g5t1agg+"|"+
			"\n|"+t2abrg5+"|"+t2g5h1score+"||"+t2g5otscore+"|"+g5t2agg+"|"+
			"\n|Series|"+serieswint1abr+": "+t1seriesagg2+"|||"+serieswint2abr+": "+t2seriesagg2+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 6){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")||"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"||"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"||"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")||"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"||"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"||"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")||"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"||"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"||"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")||"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"||"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"||"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|**"+g5mapname+"**|[**G5H1**]("+g5h1eulink+")||"+g5otstring+"|***END***|"+
			"\n|"+t1abrg5+"|"+t1g5h1score+"||"+t1g5otscore+"|"+g5t1agg+"|"+
			"\n|"+t2abrg5+"|"+t2g5h1score+"||"+t2g5otscore+"|"+g5t2agg+"|"+
			"\n|**"+g6mapname+"**|[**G6H1**]("+g6h1eulink+")||"+g6otstring+"|***END***|"+
			"\n|"+t1abrg6+"|"+t1g6h1score+"||"+t1g6otscore+"|"+g6t1agg+"|"+
			"\n|"+t2abrg6+"|"+t2g6h1score+"||"+t2g6otscore+"|"+g6t2agg+"|"+
			"\n|Series|"+serieswint1abr+": "+t1seriesagg2+"|||"+serieswint2abr+": "+t2seriesagg2+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 7){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")||"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"||"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"||"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")||"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"||"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"||"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")||"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"||"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"||"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")||"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"||"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"||"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|**"+g5mapname+"**|[**G5H1**]("+g5h1eulink+")||"+g5otstring+"|***END***|"+
			"\n|"+t1abrg5+"|"+t1g5h1score+"||"+t1g5otscore+"|"+g5t1agg+"|"+
			"\n|"+t2abrg5+"|"+t2g5h1score+"||"+t2g5otscore+"|"+g5t2agg+"|"+
			"\n|**"+g6mapname+"**|[**G6H1**]("+g6h1eulink+")||"+g6otstring+"|***END***|"+
			"\n|"+t1abrg6+"|"+t1g6h1score+"||"+t1g6otscore+"|"+g6t1agg+"|"+
			"\n|"+t2abrg6+"|"+t2g6h1score+"||"+t2g6otscore+"|"+g6t2agg+"|"+
			"\n|**"+g7mapname+"**|[**G7H1**]("+g7h1eulink+")||"+g7otstring+"|***END***|"+
			"\n|"+t1abrg7+"|"+t1g7h1score+"||"+t1g7otscore+"|"+g7t1agg+"|"+
			"\n|"+t2abrg7+"|"+t2g7h1score+"||"+t2g7otscore+"|"+g7t2agg+"|"+
			"\n|Series|"+serieswint1abr+": "+t1seriesagg2+"|||"+serieswint2abr+": "+t2seriesagg2+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}
	}else{
		if(gamesP == 2){
			t1seriesagg = g1t1agg+g2t1agg;
			t2seriesagg = g1t2agg+g2t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")|[**G1H2**]("+g1h2eulink+")|"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"|"+t1g1h2score+"|"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"|"+t2g1h2score+"|"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")|[**G2H2**]("+g2h2eulink+")|"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"|"+t1g2h2score+"|"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"|"+t2g2h2score+"|"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|AGG|"+t1abr+": "+t1seriesagg+"|||"+t2abr+": "+t2seriesagg+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 3){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")|[**G1H2**]("+g1h2eulink+")|"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"|"+t1g1h2score+"|"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"|"+t2g1h2score+"|"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")|[**G2H2**]("+g2h2eulink+")|"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"|"+t1g2h2score+"|"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"|"+t2g2h2score+"|"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")|[**G3H2**]("+g3h2eulink+")|"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"|"+t1g3h2score+"|"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"|"+t2g3h2score+"|"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|AGG|"+t1abr+": "+t1seriesagg+"|||"+t2abr+": "+t2seriesagg+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 4){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")|[**G1H2**]("+g1h2eulink+")|"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"|"+t1g1h2score+"|"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"|"+t2g1h2score+"|"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")|[**G2H2**]("+g2h2eulink+")|"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"|"+t1g2h2score+"|"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"|"+t2g2h2score+"|"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")|[**G3H2**]("+g3h2eulink+")|"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"|"+t1g3h2score+"|"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"|"+t2g3h2score+"|"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")|[**G4H2**]("+g4h2eulink+")|"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"|"+t1g4h2score+"|"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"|"+t2g4h2score+"|"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|AGG|"+t1abr+": "+t1seriesagg+"|||"+t2abr+": "+t2seriesagg+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 5){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")|[**G1H2**]("+g1h2eulink+")|"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"|"+t1g1h2score+"|"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"|"+t2g1h2score+"|"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")|[**G2H2**]("+g2h2eulink+")|"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"|"+t1g2h2score+"|"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"|"+t2g2h2score+"|"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")|[**G3H2**]("+g3h2eulink+")|"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"|"+t1g3h2score+"|"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"|"+t2g3h2score+"|"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")|[**G4H2**]("+g4h2eulink+")|"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"|"+t1g4h2score+"|"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"|"+t2g4h2score+"|"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|**"+g5mapname+"**|[**G5H1**]("+g5h1eulink+")|[**G5H2**]("+g5h2eulink+")|"+g5otstring+"|***END***|"+
			"\n|"+t1abrg5+"|"+t1g5h1score+"|"+t1g5h2score+"|"+t1g5otscore+"|"+g5t1agg+"|"+
			"\n|"+t2abrg5+"|"+t2g5h1score+"|"+t2g5h2score+"|"+t2g5otscore+"|"+g5t2agg+"|"+
			"\n|AGG|"+t1abr+": "+t1seriesagg+"|||"+t2abr+": "+t2seriesagg+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 6){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")|[**G1H2**]("+g1h2eulink+")|"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"|"+t1g1h2score+"|"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"|"+t2g1h2score+"|"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")|[**G2H2**]("+g2h2eulink+")|"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"|"+t1g2h2score+"|"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"|"+t2g2h2score+"|"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")|[**G3H2**]("+g3h2eulink+")|"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"|"+t1g3h2score+"|"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"|"+t2g3h2score+"|"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")|[**G4H2**]("+g4h2eulink+")|"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"|"+t1g4h2score+"|"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"|"+t2g4h2score+"|"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|**"+g5mapname+"**|[**G5H1**]("+g5h1eulink+")|[**G5H2**]("+g5h2eulink+")|"+g5otstring+"|***END***|"+
			"\n|"+t1abrg5+"|"+t1g5h1score+"|"+t1g5h2score+"|"+t1g5otscore+"|"+g5t1agg+"|"+
			"\n|"+t2abrg5+"|"+t2g5h1score+"|"+t2g5h2score+"|"+t2g5otscore+"|"+g5t2agg+"|"+
			"\n|**"+g6mapname+"**|[**G6H1**]("+g6h1eulink+")|[**G6H2**]("+g6h2eulink+")|"+g6otstring+"|***END***|"+
			"\n|"+t1abrg6+"|"+t1g6h1score+"|"+t1g6h2score+"|"+t1g6otscore+"|"+g6t1agg+"|"+
			"\n|"+t2abrg6+"|"+t2g6h1score+"|"+t2g6h2score+"|"+t2g6otscore+"|"+g6t2agg+"|"+
			"\n|AGG|"+t1abr+": "+t1seriesagg+"|||"+t2abr+": "+t2seriesagg+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}else if(gamesP == 7){
			t1seriesagg = g1t1agg+g2t1agg+g3t1agg+g4t1agg+g5t1agg+g6t1agg+g7t1agg;
			t2seriesagg = g1t2agg+g2t2agg+g3t2agg+g4t2agg+g5t2agg+g6t2agg+g7t2agg;
			document.getElementById("outputc").value = "************************************************"+
			"\n[***Mobile friendly image***]("+imglink+")"+
			"\n"+
			"\n************************************************"+
			"\n"+
			"\n**"+t1name+" vs. "+t2name+"**"+
			"\n"+
			"\n|**"+g1mapname+"**|[**G1H1**]("+g1h1eulink+")|[**G1H2**]("+g1h2eulink+")|"+g1otstring+"|***END***|"+
			"\n:--|--:|--:|--:|--:|"+
			"\n|"+t1abrg1+"|"+t1g1h1score+"|"+t1g1h2score+"|"+t1g1otscore+"|"+g1t1agg+"|"+
			"\n|"+t2abrg1+"|"+t2g1h1score+"|"+t2g1h2score+"|"+t2g1otscore+"|"+g1t2agg+"|"+
			"\n|**"+g2mapname+"**|[**G2H1**]("+g2h1eulink+")|[**G2H2**]("+g2h2eulink+")|"+g2otstring+"|***END***|"+
			"\n|"+t1abrg2+"|"+t1g2h1score+"|"+t1g2h2score+"|"+t1g2otscore+"|"+g2t1agg+"|"+
			"\n|"+t2abrg2+"|"+t2g2h1score+"|"+t2g2h2score+"|"+t2g2otscore+"|"+g2t2agg+"|"+
			"\n|**"+g3mapname+"**|[**G3H1**]("+g3h1eulink+")|[**G3H2**]("+g3h2eulink+")|"+g3otstring+"|***END***|"+
			"\n|"+t1abrg3+"|"+t1g3h1score+"|"+t1g3h2score+"|"+t1g3otscore+"|"+g3t1agg+"|"+
			"\n|"+t2abrg3+"|"+t2g3h1score+"|"+t2g3h2score+"|"+t2g3otscore+"|"+g3t2agg+"|"+
			"\n|**"+g4mapname+"**|[**G4H1**]("+g4h1eulink+")|[**G4H2**]("+g4h2eulink+")|"+g4otstring+"|***END***|"+
			"\n|"+t1abrg4+"|"+t1g4h1score+"|"+t1g4h2score+"|"+t1g4otscore+"|"+g4t1agg+"|"+
			"\n|"+t2abrg4+"|"+t2g4h1score+"|"+t2g4h2score+"|"+t2g4otscore+"|"+g4t2agg+"|"+
			"\n|**"+g5mapname+"**|[**G5H1**]("+g5h1eulink+")|[**G5H2**]("+g5h2eulink+")|"+g5otstring+"|***END***|"+
			"\n|"+t1abrg5+"|"+t1g5h1score+"|"+t1g5h2score+"|"+t1g5otscore+"|"+g5t1agg+"|"+
			"\n|"+t2abrg5+"|"+t2g5h1score+"|"+t2g5h2score+"|"+t2g5otscore+"|"+g5t2agg+"|"+
			"\n|**"+g6mapname+"**|[**G6H1**]("+g6h1eulink+")|[**G6H2**]("+g6h2eulink+")|"+g6otstring+"|***END***|"+
			"\n|"+t1abrg6+"|"+t1g6h1score+"|"+t1g6h2score+"|"+t1g6otscore+"|"+g6t1agg+"|"+
			"\n|"+t2abrg6+"|"+t2g6h1score+"|"+t2g6h2score+"|"+t2g6otscore+"|"+g6t2agg+"|"+
			"\n|**"+g7mapname+"**|[**G7H1**]("+g7h1eulink+")|[**G7H2**]("+g7h2eulink+")|"+g7otstring+"|***END***|"+
			"\n|"+t1abrg7+"|"+t1g7h1score+"|"+t1g7h2score+"|"+t1g7otscore+"|"+g7t1agg+"|"+
			"\n|"+t2abrg7+"|"+t2g7h1score+"|"+t2g7h2score+"|"+t2g7otscore+"|"+g7t2agg+"|"+
			"\n|AGG|"+t1abr+": "+t1seriesagg+"|||"+t2abr+": "+t2seriesagg+"|"+
			"\n"+
			"\n"+
			"\n[***Stream***]("+slink+") By: "+sname+""+
			"\n"+
			"\n*Thanks "+sname+" for streaming!♥*"+
			"\n"+
			"\n"+
			"\n********************************";
		}
	}
}
function share(){

	var apiKey = "6933e35cc932981";
	var imgout = c.toDataURL();
	var dataout = imgout.split(',')[1];
	var formData = new FormData();

	formData.append("image",dataout);
	$.ajax({
	 url: "https://api.imgur.com/3/image",
	 type: "POST",
	 datatype: "json",
	 headers: {
		"Authorization": "Client-ID 6933e35cc932981"
	 },
	 data: formData,
	 success: function(response) {

		var photo = response.data.link;
		var photo_hash = response.data.deletehash;
		imglink = photo;
		drawText();
	 },
	 cache: false,
	 contentType: false,
	 processData: false
  });

}
