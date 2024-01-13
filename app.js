let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComprChoice = ()=>{
    const options = ["rock","paper","scissors"]
    const randInx =  Math.floor(Math.random() * 3)
    return options[randInx]
}
const drawGame = ()=> {
    // console.log("game was draw");
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        // console.log("you Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++
        compScorePara.innerText = compScore;
        // console.log("you loss");
        msg.innerText =  `You loss! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=> {
    const compChoice = genComprChoice()
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})