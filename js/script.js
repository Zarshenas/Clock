let watch = document.getElementById("watch");
let pmOrAm = document.querySelector(".timezone");
let h;  let m;  let s;

let showTime = setInterval(time,1000);

function time(){
        let getClock = new Date();

        h = getClock.getHours();
        m = getClock.getMinutes();
        s = getClock.getSeconds();
        if(h<12 && h>=0 ){
            pmOrAm.innerText = "AM";
        }else{
            h=h-12;
            pmOrAm.innerText = "PM";
        }
        watch.innerText = `${h} : ${m} : ${s} `;
         if(h<10){
             watch.innerText = `0${h} : ${m} : ${s} `;
         }else if(m<10){
             watch.innerText = `${h} : 0${m} : ${s} `;
         }else if(s<10){
             watch.innerText = `${h} : ${m} : 0${s} `;
         }
}

