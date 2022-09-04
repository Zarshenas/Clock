let watchEl = document.getElementById("watch"),
    timeZone = document.querySelector(".timezone");
let h,  
    m,  
    s;

let showTime = setInterval(time,1000);

function time(){
        let getTime = new Date();
        h = getTime.getHours();
        m = getTime.getMinutes();
        s = getTime.getSeconds();
        if(h<12 && h>=0 ){
            timeZone.innerText = "AM";
        }else{
            h=h-12;
            timeZone.innerText = "PM";
        }
        watchEl.innerText = `${h} : ${m} : ${s} `;
         if(h<10){
             watchEl.innerText = `0${h} : ${m} : ${s} `;
         }else if(m<10){
             watchEl.innerText = `${h} : 0${m} : ${s} `;
         }else if(s<10){
             watchEl.innerText = `${h} : ${m} : 0${s} `;
         }
}

