
document.addEventListener("DOMContentLoaded", ()=>{
  // Main code
let time = 60;

setInterval(()=>{
document.getElementById("time").innerHTML = time;
if(time==0){
      document.getElementsByTagName("body")[0].innerHTML = "<h1>GAME OVER, YOUR SCORE IS "+score+" </h1>";
      console.log(score);
  }
time--
}, 1000)

const cardArray = [
  {
    name:"Hotdog",
    img:"blue"
  },
  {
    name:"Hotdog",
    img:"blue"
  },
  {
    name:"Hotdog",
    img:"red"
  },
  {
    name:"Hotdog",
    img:"red"
  },
  {
    name:"Hotdog",
    img:"green"
  },
  {
    name:"Hotdog",
    img:"green"
  },
  {
    name:"Hotdog",
    img:"yellow"
  },
  {
    name:"Hotdog",
    img:"yellow"
  },
  {
     name:"Hotdog",
     img:"brown"
    },
  {
    name:"Hotdog",
    img:"brown"
      },
   {
      name:"Hotdog",
      img:"purple"
        },
   {
      name:"Hotdog",
      img:"purple"
    }

]
//alert(cardArray[9].name)
let randArr = [];
let chosen = [];
let chosenId = [];
let score = 0;
document.getElementById("Result").innerHTML = score;


while(randArr.length<12){
  val = Math.floor((Math.random()*12));

  if(randArr.indexOf(val)<0){
    randArr.push(val);
  }
}


const grid = document.querySelector(".grid");
let cardsChosen = [];
let cardChosenId = [];
const createBoard=()=>{
  for(let i = 0; i<cardArray.length; i++){

     var card = document.createElement("img");
     card.setAttribute("class","box");
     card.setAttribute("id", i);
     grid.append(card);
     card.addEventListener("click",function eventish(){
       let val = document.getElementById(i);

       val.style.backgroundColor = cardArray[randArr[i]].img;
       chosen.push(cardArray[randArr[i]].img)
       chosenId.push(i);
       if(chosen.length==2){
         setTimeout(()=>{
           if(chosen[0]==chosen[1]&&chosenId[0]!=chosenId[1]){

             alert("Correct");
             score++;
             document.getElementById("Result").innerHTML = score;
             document.getElementById(chosenId[0]).style.backgroundColor = "black";
             document.getElementById(chosenId[1]).style.backgroundColor = "black";
             document.getElementById(chosenId[0]).addEventListener("click",()=>{
               alert("Already used")
             });
             document.getElementById(chosenId[0]).addEventListener("click",()=>{
               alert("Already used")
             });
              if(score==6){
                  document.getElementsByTagName("body")[0].innerHTML = "<h1>CONGRATULATIONS YOU WON, YOUR SCORE IS "+score+" </h1>";  
              }
              chosen = [];
              chosenId = [];
           }
           else{
             document.getElementById(chosenId[0]).style.backgroundColor = "white";
             document.getElementById(chosenId[1]).style.backgroundColor = "white";
             alert("Incorrect");
              chosen = [];
              chosenId = [];
           }
         }, 500);

       }

     })
  }
}

createBoard();
})
