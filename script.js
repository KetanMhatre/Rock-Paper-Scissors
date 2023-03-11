const arr=[
    {
        id:"rock",
        img:"./images/icon-rock.svg"
       
    },
    {
        id:"paper",
        img:"./images/icon-paper.svg"
       
    },
    {
        id:"scissor",
        img:"./images/icon-scissors.svg"
       
    }
]

const mainGame=document.querySelector(".main-game")
const gameStarted = document.querySelector(".game-started")
const modal = document.querySelector(".rules-modal")
const close = document.querySelector(".close-icon")
const options=document.querySelectorAll(".option")
const playerImg =document.querySelector(".player-Img")
const houseImg= document.querySelector(".house-Img")
const display=document.querySelector(".display")
const playAgain =document.querySelector(".play-again")
const player=document.querySelector(".player")
const house=document.querySelector(".house")
const rules= document.querySelector(".rules-btn")
const  score =document.querySelector(".score")

    let currentScore = 0
  
    close.addEventListener('click',function(){
        modal.classList.add("rules-modal-active")
    })
    rules.addEventListener('click',function(){
        modal.classList.remove("rules-modal-active")
    })
    game()
  
    function game(){
        options.forEach(function(option){
            option.addEventListener('click',function(){
                gameStarted.classList.remove("clicked")
                mainGame.classList.add("clicked")
                playerImg.src = option.src
                let c=computer()
              
                if(c === "rock"){
                    house.classList.add("clicked-rock")
                }
                else if(c === "paper"){
                    house.classList.add("clicked-paper")
                }
                else{
                    house.classList.add("clicked-scissor")
                }
               
                switch(option.id){
                    case "rock":
                        player.classList.add("clicked-rock")
                        if(c === "scissor"){
                            display.textContent = "YOU WON"
                            currentScore++
                            score.textContent = currentScore
                        }
                        else if(c !== "rock"){
                            display.textContent = "HOUSE WON"
                            currentScore--
                            score.textContent = currentScore
                        }
                        else{
                            display.textContent = "TIE"
                        }
                        break

                    case "paper":
                        player.classList.add("clicked-paper")
                        if(c === "rock"){
                        display.textContent = "YOU WON"
                        currentScore++
                        score.textContent = currentScore
                    }
                    else if(c !== "paper"){
                        display.textContent = "HOUSE WON"
                        currentScore--
                        score.textContent = currentScore
                    }
                    else{
                        display.textContent = "TIE"
                    }
                        break

                    case "scissor":
                        player.classList.add("clicked-scissor")
                            if(c === "paper" ){
                            display.textContent = "YOU WON"
                            currentScore++
                            score.textContent = currentScore
                        }
                        else if(c !== "scissor"){
                            display.textContent = "HOUSE WON"
                            currentScore--
                            score.textContent = currentScore 
                        }
                        else{
                            display.textContent = "TIE"
                        }
                            break
                    default : 
                        display.textContent = "TIE"
                }
            })
           
        })    
       
    }
    playAgain.addEventListener("click",function(){
        gameStarted.classList.add("clicked")
        mainGame.classList.remove("clicked")
        player.classList.remove("clicked-paper","clicked-scissor","clicked-rock")
        house.classList.remove("clicked-paper","clicked-scissor","clicked-rock")
    })   

    function computer(){
        let random = Math.floor(Math.random()*arr.length)
        houseImg.src = arr[random].img
        return arr[random].id
    }
 

 