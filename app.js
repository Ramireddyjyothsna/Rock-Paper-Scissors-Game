let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const compchoice = gencomchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissors,paper
            userwin = compchoice === "paper" ? false: true;
        } else if(userchoice === "paper"){
            //rock,scissors
            userwin = compchoice === "scissors" ? false: true; 
        }
        else{
            //rock,paper
            userwin = compchoice === "rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playGame(userchoice);
    });
});