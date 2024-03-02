let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7]
];
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){
        box.innerText="O";
        turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
    
    });
});
const shoWinner=(winner)=>{
    msg.innerText=`Conguratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabl();

};
const checkWinner=() =>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;   
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            shoWinner(pos1);
        }
    }
};

};
const reset=() =>{
    turn0=true;
    enable();
    msgContainer.classList.add("hide");

}
const disabl=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);