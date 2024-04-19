var randomNumber1= Math.floor(Math.random()*6)+1;

var randomDiceImages= "dice"+ randomNumber1+".png";//dice1.png- dice6.png;

var randomImageSource= "images/"+randomDiceImages;//images/dice1.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];// for the first image

image1.setAttribute("src",randomImageSource);

// for 2nd image

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 +".png";

var randoomImagesSource2 = "images/"+ randomDiceImage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randoomImagesSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
    
    document.querySelector("h1").innerHTML="Draw!";
}



