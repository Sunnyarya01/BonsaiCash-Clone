let gogl = document.querySelector("#gogl");
gogl.addEventListener("click",function(){
    window.location.href = "/Sign UP/index.html"
})
let form = document.querySelector("form");
let login = document.querySelector("#btnn");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    login.addEventListener("click",function(){
        let data = {
            email:form.user_email.value,
            password:form.user_password.value,
        }

        if(checkSignin(data.email,data.password)===true){
            window.location.href="/Dashboard/index.html";
            alert("Sign in Successful");
        }else{
            alert("Wrong Username or Password");
        }
    })

    function checkSignin(email,password){
        let filter = userData.filter(function(element){
            return element.email === email && element.password === password;
        })
        if(filter.length>0){
            return true;
        }else{
            return false;
        }
    }