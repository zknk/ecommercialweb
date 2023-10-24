const date=new Date();
let year=date.getFullYear();
document.getElementById("bottom").textContent=year;
window.addEventListener('scroll',reveal);

function reveal(){
    var reveals =document.querySelectorAll('.reveals');

    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=50;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");

if(bar){
    bar.addEventListener("click",()=>{
            nav.classList.add('active');
    })
}

if(close){
    close.addEventListener("click",()=>{
            nav.classList.remove('active');
    })
}