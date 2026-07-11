const envelope =
document.getElementById("envelope");


let opened=false;


envelope.addEventListener("click",()=>{


    if(opened) return;


    opened=true;


    envelope.classList.add("open");


});
