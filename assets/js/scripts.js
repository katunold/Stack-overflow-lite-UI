var loggedIn = false;
var accountName = "John Bill";
var accountPassword = "12345678";


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username === "" || password == null || password === "") {
        alert("Please insert both the username and Password");
        return false
    }else if ( username === accountName && password === accountPassword) {
        alert("Welcome! You Have Successfully logged-in");
        location.href = '../';
        return false
    }else {
        alert("Invalid Log-in credentials!");
        return false
    }
}


function displayQtn() {
    loggedIn = true;
    if(loggedIn) {
        window.location = "../../answers.html"
    }else {
        alert("Please Login To view Answers!")
    }
}


questionData = [
    {
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        postedBy : "Katumba Arnold",
        postedAt : "09-Aug-2018",
        answers : "5",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        postedBy : "Bill John",
        postedAt : "08-Aug-2018",
        answers : "5",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        postedBy : "Rubalema Sam",
        postedAt : "07-Aug-2018",
        answers : "5",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

function question (){

}

document.getElementById("questions-tag").innerHTML = `
    <h3>RECENT QUESTIONS</h3>
    ${questionData.map(function(qns){
        return `
            <div class="qns">
                <h3>${qns.title}</h3>
                <p>
                    <label><strong>Posted by : </strong> ${qns.postedBy}</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label><strong>Posted At : </strong> ${qns.postedAt}</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label><strong>${qns.answers} Answers</strong></label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="answers.html">Read More</a>
                </p>
                <p>${qns.content}</p>
            </div>
        `
    }).join("")}
`