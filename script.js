let turn ="X";

var text= document.querySelector(".win-lose")

const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}
var box = document.getElementsByClassName("item");
Array.from(box).forEach(element=>{
    
element.addEventListener("click",()=>{
    if(element.innerText=== ''){
        element.innerText=turn;
        turn = changeTurn();
        checkWin();
       
    }
})
})
const button = document.querySelector(".reset");

button.addEventListener("click",()=>{
    text.innerText="";
    for(let i=0;i<9;i++){
        box[i].innerHTML="";
    }
})

if(text.innerText === ""){
text.innerText = "match draws";
}
function checkWin(){
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    var a,b,c;
  
    win.forEach(e=>{
        a=e[0];
        b=e[1];
        c=e[2];
        if((box[a].innerText === box[b].innerText) && (box[b].innerText === box[c].innerText) && (box[a].innerText !== "") && (box[b].innerText !== "") && (box[c].innerText !== "")){
          text.innerText= box[e[0]].innerText + " won";
        }
    })
}
