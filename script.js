// =========================
// ELEMENTLER
// =========================

const title =
document.getElementById("title");


const text =
document.getElementById("text");


const choices =
document.getElementById("choices");


const card =
document.querySelector(".story-card");


const scene =
document.getElementById("scene");




// =========================
// SAHNE DEĞİŞTİRME
// =========================

function changeScene(type){

    scene.className="";


    if(type){

        scene.classList.add(type);

    }

}



// =========================
// HİKAYE DEĞİŞTİRME
// =========================

function changeStory(
newTitle,
newText,
newChoices
){


    card.classList.remove("change");


    void card.offsetWidth;


    card.classList.add("change");



    title.innerHTML =
    newTitle;


    text.innerHTML =
    newText;


    choices.innerHTML="";



    newChoices.forEach(choice=>{


        const button =
        document.createElement("button");



        button.innerHTML =
        choice.text;



        button.onclick = ()=>{

            next(choice.action);

        };



        choices.appendChild(button);


    });


} 
// =========================
// BAŞLANGIÇ
// =========================

function startStory(){


    changeStory(

        "แสงที่ตกลงมาจากท้องฟ้า ✨",


        "ในคืนที่เงียบสงบ<br><br>มีแสงประหลาดตกลงไปในป่าลึก...",


        [

            {
                text:"🌲 เดินตามแสงประหลาด",
                action:"forest"
            },


            {
                text:"🏠 กลับบ้าน",
                action:"home"
            }

        ]

    );


}



// =========================
// SEÇİMLER
// =========================

function next(action){



// Orman yolu

if(action==="forest"){


    changeScene("forest");


    changeStory(

        "ป่าลึกลับ 🌲",


        "คุณเดินเข้าไปในป่าที่มืดมิด<br><br>และพบประตูเก่าที่ไม่เคยเห็นมาก่อน",


        [

            {
                text:"🚪 เปิดประตู",
                action:"door"
            },


            {
                text:"🔍 ตรวจสอบสัญลักษณ์",
                action:"symbol"
            }

        ]

    );


}




// Eve dönüş yolu

if(action==="home"){


    changeStory(

        "ข้อความปริศนา 📱",


        "โทรศัพท์ของคุณได้รับข้อความจากคนที่ไม่รู้จัก...",


        [

            {
                text:"📩 ตอบกลับ",
                action:"reply"
            },


            {
                text:"❌ ไม่สนใจ",
                action:"ignore"
            }

        ]

    );


} 
// =========================
// KAPI YOLU
// =========================

if(action==="door"){


    changeScene("door");


    changeStory(

        "ประตูลึกลับ 🚪",


        "เมื่อประตูเปิดออก คุณเห็นแสงประหลาดจากอีกโลกหนึ่ง...",


        [

            {
                text:"🌌 ก้าวเข้าไป",
                action:"enterWorld"
            },


            {
                text:"🏃 กลับออกไป",
                action:"runAway"
            }

        ]

    );


}




// =========================
// สัญลักษณ์โบราณ
// =========================

if(action==="symbol"){


    changeStory(

        "สัญลักษณ์โบราณ 📜",


        "แสงจากสัญลักษณ์เริ่มส่องสว่าง<br><br>และมีข้อความลึกลับปรากฏขึ้น",


        [

            {
                text:"⭐ แตะสัญลักษณ์",
                action:"touchSymbol"
            },


            {
                text:"🌙 รอแสงจันทร์",
                action:"waitMoon"
            }

        ]

    );


}




// =========================
// MESAJ YOLU
// =========================

if(action==="reply"){


    changeStory(

        "ผู้ส่งปริศนา 📱",


        "ข้อความใหม่ปรากฏขึ้น<br><br>'จงออกไปข้างนอก แล้วมองท้องฟ้า'",


        [

            {
                text:"🚶 ออกไปข้างนอก",
                action:"goOutside"
            },


            {
                text:"🚪 ปิดประตู",
                action:"lockDoor"
            }

        ]

    );


}




if(action==="ignore"){


    changeStory(

        "แสงที่หน้าต่าง 🌙",


        "กลางดึก มีแสงประหลาดส่องเข้ามาในห้องของคุณ",


        [

            {
                text:"🪟 เปิดหน้าต่าง",
                action:"window"
            },


            {
                text:"😴 นอนต่อ",
                action:"sleep"
            }

        ]

    );


} 
// =========================
// GİZLİ DÜNYA
// =========================

if(action==="enterWorld"){


    changeScene("space");


    changeStory(

        "โลกที่ซ่อนอยู่ 🌌",


        "คุณเดินผ่านประตู<br><br>และพบโลกที่เต็มไปด้วยดวงดาวที่ไม่เคยเห็นมาก่อน",


        [

            {
                text:"⭐ ค้นหาความจริง",
                action:"finalTruth"
            },


            {
                text:"🌙 สำรวจโลกนี้",
                action:"helpStar"
            }

        ]

    );


}




// =========================
// GERİ DÖNÜŞ
// =========================

if(action==="runAway"){


    changeStory(

        "ความลับที่ยังอยู่ 🌑",


        "คุณกลับออกมาได้<br><br>แต่ยังสงสัยว่าเกิดอะไรขึ้น",


        [

            {
                text:"🚪 กลับไปที่ประตู",
                action:"door"
            },


            {
                text:"🏠 กลับบ้าน",
                action:"mysteryEnd"
            }

        ]

    );


}




// =========================
// YILDIZ
// =========================

if(action==="helpStar"){


    changeStory(

        "ดาวดวงสุดท้าย ⭐",


        "คุณพบดาวดวงเล็ก ๆ ที่กำลังหลงทาง<br><br>มันกำลังรอความช่วยเหลือ",


        [

            {
                text:"💙 ช่วยดาว",
                action:"returnStar"
            },


            {
                text:"🔍 ถามความจริง",
                action:"askTruth"
            }

        ]

    );


}




// =========================
// SEMBOL SIRRI
// =========================

if(action==="touchSymbol"){


    changeStory(

        "ความทรงจำที่หายไป 🕰️",


        "แสงจากสัญลักษณ์ทำให้คุณเห็นอดีตที่ลืมไป",


        [

            {
                text:"🧩 ค้นหาคำตอบ",
                action:"memory"
            },


            {
                text:"🌙 ทิ้งความลับไว้",
                action:"leaveSecret"
            }

        ]

    );


}




// =========================
// AY IŞIĞI
// =========================

if(action==="waitMoon"){


    changeStory(

        "แสงจันทร์ 🌙",


        "เมื่อพระจันทร์ส่องลงมา ประตูก็ค่อย ๆ เปิดออก",


        [

            {
                text:"🚪 เข้าไป",
                action:"enterWorld"
            }

        ]

    );


} 
// =========================
// YILDIZI GÖNDER
// =========================

if(action==="returnStar"){


    changeScene("final");


    changeStory(

        "แสงแห่งความหวัง ⭐",


        "คุณส่งดาวดวงสุดท้ายกลับสู่ท้องฟ้า<br><br>และมันจะคอยส่องแสงให้คุณทุกคืน",


        [

            {
                text:"🌙 จบเรื่อง",
                action:"end"
            }

        ]

    );


}



// =========================
// GERÇEĞİ ÖĞREN
// =========================

if(action==="askTruth"){


    changeStory(

        "ความจริงของจักรวาล 🌌",


        "ดาวดวงนี้ไม่ใช่ดาวธรรมดา<br><br>แต่มันคือกุญแจสู่ความลับของจักรวาล",


        [

            {
                text:"🔑 รับกุญแจ",
                action:"key"
            }

        ]

    );


}



// =========================
// ANAHTAR
// =========================

if(action==="key"){


    changeStory(

        "ประตูแห่งจักรวาล 🔑",


        "กุญแจเปิดประตูสู่สถานที่ที่ไม่มีใครเคยพบ",


        [

            {
                text:"🌌 เปิดประตู",
                action:"finalTruth"
            }

        ]

    );


}



// =========================
// GEÇMİŞ
// =========================

if(action==="memory"){


    changeStory(

        "ความทรงจำที่แท้จริง 🕰️",


        "คุณพบว่าการเดินทางครั้งนี้ไม่ใช่เรื่องบังเอิญ<br><br>ดาวดวงนี้เลือกคุณตั้งแต่แรก",


        [

            {
                text:"✨ ยอมรับความจริง",
                action:"memoryEnd"
            }

        ]

    );


}



// =========================
// SIRRI BIRAK
// =========================

if(action==="leaveSecret"){


    changeStory(

        "ความลับของค่ำคืน 🌑",


        "คุณไม่รู้คำตอบทั้งหมด<br><br>แต่ความลึกลับยังคงอยู่บนท้องฟ้า",


        [

            {
                text:"🌙 จบเรื่อง",
                action:"mysteryEnd"
            }

        ]

    );


} 
// =========================
// GERÇEK SON
// =========================

if(action==="finalTruth"){


    changeScene("final");


    changeStory(

        "ผู้พิทักษ์ดวงดาว 🌌",


        "คุณค้นพบความลับของจักรวาล<br><br>และกลายเป็นผู้ปกป้องดวงดาวตลอดไป",


        [

            {
                text:"⭐ จบเรื่อง",
                action:"end"
            }

        ]

    );


}



// =========================
// GEÇMİŞ SONU
// =========================

if(action==="memoryEnd"){


    changeScene("final");


    changeStory(

        "ความทรงจำที่กลับมา 🕰️",


        "คุณเข้าใจแล้วว่าเหตุการณ์ทั้งหมดถูกกำหนดไว้ตั้งแต่แรก<br><br>ดาวดวงนี้รอคุณมานาน",

        [

            {
                text:"🌙 จบเรื่อง",
                action:"end"
            }

        ]

    );


}



// =========================
// GİZEMLİ SON
// =========================

if(action==="mysteryEnd"){


    changeScene("final");


    changeStory(

        "ความลับของคืนดาว ⭐",


        "บางคำถามอาจไม่มีคำตอบ<br><br>แต่ความมหัศจรรย์ยังคงอยู่เสมอ",

        [

            {
                text:"✨ จบเรื่อง",
                action:"end"
            }

        ]

    );


}



// =========================
// SON EKRANI
// =========================

if(action==="end"){


    changeStory(

        "ราตรีสวัสดิ์ 🌙",


        "ขอบคุณที่เดินทางไปกับเรื่องราวนี้<br><br>ขอให้คืนนี้เต็มไปด้วยความฝันดี",

        [

            {
                text:"🔄 เริ่มใหม่",
                action:"restart"
            }

        ]

    );


}



// =========================
// YENİDEN BAŞLAT
// =========================

if(action==="restart"){


    location.reload();


}


} 
