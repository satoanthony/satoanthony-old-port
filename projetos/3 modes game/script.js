//starting page
let starting_page = document.querySelector("#starting_page");
let li = document.querySelectorAll("li");
let start_game = document.querySelector("#start_game");

//main Page
let main_page = document.querySelector("#main_page");
let guessValue = document.querySelector("#guessValue");
let user_input = document.querySelector("#user_input");
let guess = document.querySelector("#guess");
let hint = document.querySelector("#hint");
let lifes_left = document.querySelectorAll(".lifes_left");

//winner Page
let winner = document.querySelector("#winner");
let final_lifes = document.querySelectorAll(".final_lifes");
let quit = document.querySelectorAll(".quit");

//loser page
let loser = document.querySelector("#loser");

//check The Game Mode User Wants To Play
let gameMode = "";

//user Lifes
let Lifes = null;

//Generate Random Number
let randomNumber = null;

//select Game Mode
li.forEach(list => {
    list.addEventListener("click", () => {
        li.forEach(removeClass => {
            removeClass.classList.remove("active");
            gameMode = "";
        })
        gameMode = list.innerText;
        list.classList.add("active");
        //        console.log(gameMode);
    })
})

//start Game
start_game.addEventListener("click", () => {
    starting_page.style.display = "none";
    main_page.style.display = "block";

    if (gameMode == "" || gameMode == "Easy") {
        console.log("Easy");
        Game_Mode(3, 10);
    } else if (gameMode == "Medium") {
        console.log("Medium");
        Game_Mode(5, 50);
    } else if (gameMode == "Hard") {
        console.log("Hard");
        Game_Mode(7, 100);
    } else {
        console.log("syntax error");
    }
})

//Function For Three Different Game Modes =>Easy =>Medium =>Hard
let Game_Mode = (user_Lifes, RandNum) => {
    Lifes = user_Lifes;
    randomNumber = Math.floor(Math.random() * RandNum);
        console.log("random Number = " + randomNumber);

    guessValue.innerText = `Min Guess = 0 | Max Guess = ${RandNum}`;

    lifes_left.forEach(totalLifes => {
        totalLifes.innerText = `Lifes Left ${Lifes}`;
    })
    
    //what Happen when Guess Button Will Click
guess.addEventListener("click", () => {
    //display Result
    if (Number(user_input.value) == randomNumber) {
        main_page.style.display = "none";
        winner.style.display = "block";
        final_lifes.innerHTML = `Lifes Left <b>${Lifes}</b>`;
    }
    //show Hint
    else if (Number(user_input.value) < randomNumber) {
        hint.innerText = `Enter Greater Number`;
        guess.innerText = `Guess Again`;
        user_input.value = '';
    }
    //show Hint
    else if (Number(user_input.value) > randomNumber) {
        hint.innerText = `Enter Lesser Number`;
        guess.innerText = `Guess Again`;
        user_input.value = '';
    } else {
        console.log("syntax Error");
    }

    Lifes--
    console.log(Lifes);

    //    user lifes
    lifes_left.forEach(totalLifes => {
        totalLifes.innerText = `Lifes Left ${Lifes}`;
    })

    //if the user Lifes is equal to "0" and the user answer is corrext then
    if (Lifes == 0 && Number(user_input.value) == randomNumber) {
        main_page.style.display = "none";
        winner.style.display = "block";
        loser.style.display = "none";
        final_lifes.innerHTML = `Lifes Left <b>${Lifes}</b>`;
    }
    //if user lifes is equal to "0" then
    else if(Lifes == 0) {
        main_page.style.display = "none";
        loser.style.display = "block";
    }
    //quit game
    quit.forEach(quitNow => {
        quitNow.addEventListener("click", () => {
            guess.innerText = `Guess`;
            starting_page.style.display = "block";
            user_input.value = "";
            winner.style.display = "none";
            loser.style.display = "none";
        })
    })
})

}