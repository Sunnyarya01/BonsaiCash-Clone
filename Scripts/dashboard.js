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
    let timer = document.querySelector(".timer")
    timer.addEventListener("click",function(){
        console.log("Ram ")
        let h = 00;
        let m = 00;
        let s = 00;
        setInterval(function(){
            timer.innerHTML = `<div class='js'>0${h} : 0${m} : 0${s++}</div>`
                if(s==60){
                    m=m+1;
                    s=0;
                }
                if(m==60){
                    h=h+1;
                    m=0
                }
        },1000)
    })
}
timer()
document.querySelector(".free_trial").addEventListener("click",()=>{
    window.location.href="my project3/payment.html"
})