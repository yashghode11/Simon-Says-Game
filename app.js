let gameSeq=[];
let userSeq=[];
let colorb=["blue","red","green","yellow"];
let level =0;
let gameStarted=false;
let h2=document.querySelector("h2");
let h1=document.querySelector("h1");
let g=document.querySelector("#highs");
g.innerText=0;

document.addEventListener("keypress",function(){
    if(gameStarted==false){
        console.log("the game is strated");
        gameStarted=true;
       setTimeout(function(){
        levelup();
       },500);
    }
})


function gamebtnflash(btn){
   
    btn.classList.add("whiteflash");
setTimeout(function(){
    btn.classList.remove("whiteflash");
},500)
}

function userbtnflash(btn){
    
    btn.classList.add("greenflash");
setTimeout(function(){
    btn.classList.remove("greenflash");
},500)
}




function levelup(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;

let rnum=Math.floor(Math.random()*4 );

let rcolor=colorb[rnum];

gameSeq.push(rcolor);

let rbtn=document.querySelector(`.${rcolor}`);
setTimeout(function(){
    gamebtnflash(rbtn);
},500)
}

function checkAns(idx){
  
       
        
  
      
    if(userSeq[idx]===gameSeq[idx]){
           
        if(userSeq.length==gameSeq.length){
          
            levelup();
                        
         }
         
        }
        else{
            h2.innerHTML=`GAME OVER !!YOU LOSE THE GAME!!!!<br>your score was ${level} <br> NOW PRESS ANY KEY TO RESTART`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout( function(){
                document.querySelector("body").style.backgroundColor="white"
            },250)
           resetvalue();
         }
       
 
}

let colors=document.querySelectorAll(".color");
for(btn of colors){
    btn.addEventListener("click",function(){
        userbtnflash(this);
    let f=this.getAttribute("id");
    userSeq.push(f);
   
    
        checkAns(userSeq.length-1);
    
    
    })
    
}
function resetvalue(){
   
   if(level>g.innerText){
    g.innerText=`${level}`;
   }
    level=0;
    gameSeq=[];
    userSeq=[];
    gameStarted=false;
    

}
    
        
       

    
