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
    if(document.body.clientWidth <= 599){
        h = h < 10 ? h = `0${h}` : h = h;
        m = m < 10 ? m = `0${m}` : m = m;
        s = s < 10 ? s = `0${s}` : s = s;
        watchEl.innerHTML = `${h} <br> ${m} <br> ${s} `;
    }else{
        h = h < 10 ? h = `0${h}` : h = h;
        m = m < 10 ? m = `0${m}` : m = m;
        s = s < 10 ? s = `0${s}` : s = s;
        watchEl.innerText = `${h} : ${m} : ${s} `;
    }
}