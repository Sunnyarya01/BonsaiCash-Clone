let gogl = document.querySelector("#gogl");
gogl.addEventListener("click",function(){
    window.location.href = "login.html"
})
let login = document.querySelector(".login-btn>button").addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="login.html"
})
let form = document.querySelector("form");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let data={
            name:form.user_name.value,
            email:form.user_email.value,
            password:form.user_password.value,
            country:form.ctry_2.value,
            currency:form.ctry_3.value
        }
        if(checkEmails(data.email)===true){
            alert("Sign UP Sucessfull")
            window.location.href="login.html"
            userData.push(data);
            localStorage.setItem("userData",JSON.stringify(userData));
        }else{
            window.location.href="login.html"
            alert("Account Already Exists");
        }
    })

    function checkEmails(email){
        let filtered = userData.filter(function(element){
            return email === element.email;
        })
        if(filtered.length >0){
            return false;
        }else{
            return true;
        }
    }