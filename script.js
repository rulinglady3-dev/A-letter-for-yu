const envelope = document.getElementById("envelope");


const letter = document.getElementById("letter");


const flap = document.getElementById("flap");



let opened = false;



envelope.addEventListener("click",()=>{


    if(opened) return;


    opened = true;


    flap.style.transform =
    "rotateX(180deg)";


    letter.style.transform =
    "translateX(-50%) translateY(-130px)";


});
