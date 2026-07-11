/* =====================================
   A LETTER FOR YU
   SCRIPT.JS
===================================== */


/* =========================
   ELEMENTS
========================= */

const startScreen =
document.getElementById("startScreen");

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");

const gifScreen =
document.getElementById("gifScreen");

const gifImage =
document.getElementById("gifImage");

const missScreen =
document.getElementById("missScreen");

const okayScreen =
document.getElementById("okayScreen");

const catScreen =
document.getElementById("catScreen");

const finalScreen =
document.getElementById("finalScreen");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");



/* =========================
   SCREEN CHANGE
========================= */

function showScreen(screen){

    document
    .querySelectorAll(".screen")
    .forEach(item=>{

        item.classList.add("hidden");

    });


    screen.classList.remove("hidden");

}



/* =========================
   ENVELOPE OPEN
========================= */

let envelopeOpened = false;


envelope.addEventListener(
"click",
()=>{


    if(envelopeOpened)
    return;


    envelopeOpened = true;


    envelope.classList.add("open");


}); 
/* =========================
   LETTER CLICK
========================= */

letter.addEventListener(
"click",
()=>{


    if(!envelopeOpened)
    return;


    showScreen(gifScreen);


    startGifs();


});



/* =========================
   GIF SYSTEM
========================= */


const gifs = [

    "IMG_5300.gif",
    "IMG_5306.gif",
    "IMG_5307.gif",
    "IMG_5308.gif",
    "IMG_5309.gif",
    "IMG_5310.gif",
    "IMG_5311.gif"

];


let gifIndex = 0;



function startGifs(){


    gifIndex = 0;


    playNextGif();


}



function playNextGif(){


    if(gifIndex >= gifs.length){


        showScreen(missScreen);


        return;


    }


    gifImage.src =
    gifs[gifIndex];


    gifIndex++;


    setTimeout(()=>{


        playNextGif();


    },4000);


} 
/* =========================
   MISS YOU TRANSITION
========================= */

missScreen.addEventListener(
"click",
()=>{


    showScreen(okayScreen);


});



/* =========================
   MOVING BUTTONS
========================= */


const movingButtons =
document.querySelectorAll(".movingBtn");


movingButtons.forEach(button=>{


    button.addEventListener(
    "mouseenter",
    ()=>{


        const x =
        Math.random()*200-100;


        const y =
        Math.random()*100-50;


        button.style.transform =
        `translate(${x}px,${y}px)`;


    });


});



/* =========================
   CAT QUESTION START
========================= */


okayScreen.addEventListener(
"click",
(e)=>{


    if(
    e.target.classList.contains(
    "movingBtn")
    ){

        showScreen(catScreen);

    }


}); 
/* =========================
   YES / NO BUTTONS
========================= */


yesBtn.addEventListener(
"click",
()=>{


    showScreen(finalScreen);


    startFinalScene();


});



/* =========================
   NO BUTTON RUN AWAY
========================= */


noBtn.addEventListener(
"mouseover",
()=>{


    const x =
    Math.random()*250-125;


    const y =
    Math.random()*150-75;


    noBtn.style.transform =
    `translate(${x}px,${y}px)`;


});



/* =========================
   FINAL SCENE
========================= */


function startFinalScene(){


    finalScreen.classList.add(
    "sleeping"
    );


    createHearts();


    createPaws();


    setTimeout(()=>{


        finalScreen.classList.add(
        "starGo"
        );


    },7000);


}


/* =========================
   HEARTS
========================= */


function createHearts(){


    const container =
    document.getElementById(
    "heartContainer"
    );


    setInterval(()=>{


        const heart =
        document.createElement(
        "div"
        );


        heart.className="heart";

        heart.innerHTML="♥";


        heart.style.left =
        Math.random()*100+"%";


        heart.style.bottom="0";


        container.appendChild(
        heart
        );


        setTimeout(()=>{

            heart.remove();

        },5000);



    },700);



} 
/* =========================
   PAW PRINTS
========================= */


function createPaws(){


    const container =
    document.getElementById(
    "pawContainer"
    );


    setInterval(()=>{


        const paw =
        document.createElement(
        "div"
        );


        paw.className="paw";


        paw.innerHTML="🐾";


        paw.style.left =
        Math.random()*90+"%";


        paw.style.bottom="0";


        paw.style.animationDuration =
        (3+Math.random()*3)+"s";


        container.appendChild(
        paw
        );


        setTimeout(()=>{

            paw.remove();

        },5000);



    },900);


}




/* =========================
   STARS
========================= */


const starCanvas =
document.getElementById(
"stars"
);


const starCtx =
starCanvas.getContext(
"2d"
);


function resizeStars(){


    starCanvas.width =
    window.innerWidth;


    starCanvas.height =
    window.innerHeight;


}


resizeStars();


window.addEventListener(
"resize",
resizeStars
);



let stars=[];


for(let i=0;i<120;i++){


    stars.push({

        x:Math.random()*
        window.innerWidth,

        y:Math.random()*
        window.innerHeight,

        size:
        Math.random()*2+1,

        speed:
        Math.random()*0.03+0.01

    });


}



function drawStars(){


    starCtx.clearRect(
    0,
    0,
    starCanvas.width,
    starCanvas.height
    );


    stars.forEach(star=>{


        starCtx.beginPath();


        starCtx.arc(

            star.x,
            star.y,
            star.size,
            0,
            Math.PI*2

        );


        starCtx.fillStyle =
        "white";


        starCtx.fill();


        star.size += star.speed;


        if(star.size>3){

            star.speed*=-1;

        }


        if(star.size<1){

            star.speed*=-1;

        }


    });


    requestAnimationFrame(
    drawStars
    );


}
/* =========================
   SAKURA PETALS
========================= */


const petals =
document.getElementById(
"petals"
);



function createPetal(){


    const petal =
    document.createElement(
    "div"
    );


    petal.className="petal";


    petal.style.left =
    Math.random()*100+"%";


    petal.style.animationDuration =
    (5+Math.random()*5)+"s";


    petal.style.opacity =
    Math.random();


    petals.appendChild(
    petal
    );


    setTimeout(()=>{

        petal.remove();

    },10000);



}



setInterval(
createPetal,
400
);



/* =========================
   SHOOTING STAR TRAIL
========================= */


const shootingStar =
document.getElementById(
"shootingStar"
);



function createStarTrail(){


    const trail =
    document.createElement(
    "div"
    );


    trail.innerHTML="♡";


    trail.style.position=
    "absolute";


    trail.style.color=
    "#ffb6d9";


    trail.style.left=
    "10px";


    trail.style.top=
    "10px";


    trail.style.fontSize=
    "18px";


    shootingStar.appendChild(
    trail
    );


}



setInterval(()=>{


    if(
    finalScreen.classList.contains(
    "starGo"
    )
    ){

        createStarTrail();

    }


},300);



/* =========================
   INITIAL STATE
========================= */


showScreen(startScreen);

drawStars();
