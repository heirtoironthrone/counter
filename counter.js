let count=0;
let value=document.querySelectorAll('.value')[0]
let stat=document.querySelectorAll('.status')[0]
function inc(){
    count=count+1;
    value.innerText=count;
    stat.innerText='Increasing...'
    if(count>0){
        value.style.color='green'
    }
    else if(count<0){
        value.style.color='red'
    }
    else{
        value.style.color='black'
    }
}
function dec(){
    count=count-1
    value.innerText=count
    stat.innerText='Decreasing...'
    if(count>0){
        value.style.color='green'
    }
    else if(count<0){
        value.style.color='red'
    }
    else{
        value.style.color='black'
    }
}
function res(){
    count=0
    value.innerText=0;
    stat.innerText='Neutral...'
    if(count>0){
        value.style.color='green'
    }
    else if(count<0){
        value.style.color='red'
    }
    else{
        value.style.color='black'
    }
}