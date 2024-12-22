let n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;

let n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;

let dice1=document.querySelector("#dice1");
dice1.innerHTML="<img src='./images/dice"+n1+".png'/>";

let dice2=document.querySelector("#dice2");
dice2.innerHTML="<img src='./images/dice"+n2+".png'/>";


let h1=document.querySelector(".container h1");
if(n1>n2){
    h1.innerHTML="first dice winn....";
}
else if(n2>n1){
    h1.innerHTML="second dice winn....";
}
else{
    h1.innerHTML="its a tie";
}