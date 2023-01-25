let check = document.querySelector(".check")
let password = document.querySelector(".password")
let text = document.querySelector(".text")

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

check.addEventListener("click", () =>{
    if(password.valuew=""){
        text.innerText="Please enter an Email address";
        text.style.color = "#000";
    }
    else if(password.value.match(regex)){
        text.innerText="Congratulations! You've entered a valid Email address";
        text.style.color = "rgba(4, 125, 9, 1)";
    }
    else{
        text.innerText="Sorry! Your Email address is invalid";
        text.style.color = "rgba(255,0,0,1)";
    }
})