function cancel(){
    document.querySelector(".bank").style.display = "none";
}
let greetings = ()=>{
    let name = localStorage.getItem("Name_on_Dashboard");
    let greeting = document.querySelector(".welcome>h2");
    greeting.innerText = `Good Morning, ${name}!`
}
greetings()
function timer(){
    let timer = document.querySelector(".timr")
    let r = document.querySelector(".timer");
    r.addEventListener("click",function(){
        console.log("Ram ")
        let h = 00;
        let m = 00;
        let s = 00;
        setInterval(function(){
            if(h<10&&m<10&&s<10){
                timer.innerHTML = `<div class='js'><span>Stop</span> 0${h} : 0${m} : 0${s++}</div>`
                if(s==60){
                    m=m+1;
                    s=0;
                }
                if(m==60){
                    h=h+1;
                    m=0
                }  
            }else if(h<10&&m<10&&s>9){
                timer.innerHTML = `<div class='js'><span>Stop</span> 0${h} : 0${m} : ${s++}</div>`
                if(s==60){
                    m=m+1;
                    s=0;
                }
                if(m==60){
                    h=h+1;
                    m=0
                } 
            }else if(h<10&&m>9&&s<10){
                timer.innerHTML = `<div class='js'><span>Stop</span> 0${h} : ${m} : 0${s++}</div>`
                if(s==60){
                    m=m+1;
                    s=0;
                }
                if(m==60){
                    h=h+1;
                    m=0
                }  
            }else{
                timer.innerHTML = `<div class='js'><span><a href="./dashboard.html">Stop</a></span> 0${h} : ${m} : ${s++}</div>`
                if(s==60){
                    m=m+1;
                    s=0;
                }
                if(m==60){
                    h=h+1;
                    m=0
                } 
            }
        },1000)
    })
}
timer()
document.querySelector(".free_trial").addEventListener("click",()=>{
    window.location.href="my project3/payment.html"
})


let today = new Date()

let m = today.getMonth();
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let mm=month[m]
let dd = today.getDate();
document.querySelector("#dat").innerText = `Friday,  ${mm} ${dd}`