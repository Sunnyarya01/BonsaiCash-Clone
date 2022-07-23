import navbar from "../components/navbar.js";
// console.log(navbar());
document.querySelector("header").innerHTML = navbar();

import footer from "../components/footer.js";
document.querySelector("footer").innerHTML = footer();

document.getElementById("clientCrm").addEventListener("click",clientCrm);

function clientCrm(){
    document.getElementById("append").innerHTML = `
                <h2>Stay Organized</h2>
                <p>Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.</p>
                <p>EXPLORE PROJECTS
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png" width="80%" alt="">`
}

document.getElementById("proposals").addEventListener("click",proposals);
function proposals(){
    document.getElementById("append").innerHTML = `
                <h2>Win More Work</h2>
                <p>With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.</p>
                <p>EXPLORE PROPOSALS 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png" width="80%" alt="">`
}

document.getElementById("contracts").addEventListener("click",contracts);
function contracts(){
    document.getElementById("append").innerHTML = `
                <h2>Protect Your Business</h2>
                <p>Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.</p>
                <p>EXPLORE CONTRACTS 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png" width="80%" alt="">`
}

document.getElementById("timeTracking").addEventListener("click",timeTracking);
function timeTracking(){
    document.getElementById("append").innerHTML = `
                <h2>Keep It Simple</h2>
                <p>Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.</p>
                <p>EXPLORE TIME TRACKING 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png" width="80%" alt="">`
}

document.getElementById("invoices").addEventListener("click",invoices);
function invoices(){
    document.getElementById("append").innerHTML = `
                <h2>Get Paid Faster</h2>
                <p>Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.</p>
                <p>EXPLORE INVOICES 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png" width="80%" alt="">`
}

document.getElementById("taskTracking").addEventListener("click",taskTracking);
function taskTracking(){
    document.getElementById("append").innerHTML = `
                <h2>Be More Effective</h2>
                <p>Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.</p>
                <p>EXPLORE TASKS 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png" width="80%" alt="">`
}

document.getElementById("taxes").addEventListener("click",taxes);
function taxes(){
    document.getElementById("append").innerHTML = `
                <h2>Automate Your Finances</h2>
                <p>Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.</p>
                <p>EXPLORE EXPLORE ACCOUNTING & TAXES 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png" width="80%" alt="">`
}

document.getElementById("forms").addEventListener("click",forms);
function forms(){
    document.getElementById("append").innerHTML = `
                <h2>Ask Your Clients</h2>
                <p>Create your own customized forms and questionnaires for clients and kicking off new projects.</p>
                <p>EXPLORE FORMS 
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg" alt="" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                </p>
                <img style="margin-left: 50px;" src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png" width="80%" alt="">`
}

document.querySelector("#input>button").addEventListener("click",()=>{
    window.location.href="login.html";
})
document.querySelector("#part7>button").addEventListener("click",()=>{
    window.location.href="signup.html";
})