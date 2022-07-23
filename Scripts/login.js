let gogl = document.querySelector("#gogl");
gogl.addEventListener("click",function(){
    window.location.href = "signup.html"
})
let form = document.querySelector("form");
let login = document.querySelector("#btnn");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    login.addEventListener("click",function(event){
        event.preventDefault();
        let data = {
            email:form.user_email.value,
            password:form.user_password.value,
        }

        if(checkSignin(data.email,data.password)===true){
            alert("Sign in Successful");
            window.location.href="dashboard.html"
            name(data.email)
        }else{
            alert("Wrong Username or Password");
            window.location.href="signup.html"
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
    let name = (email)=>{
        userData.forEach((element) => {
            if(element.email == email)
            localStorage.setItem("Name_on_Dashboard", element.name)    
        });
    }