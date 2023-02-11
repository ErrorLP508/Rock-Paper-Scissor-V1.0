function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function choice(play) {
    let result = ""
    if(play == 1) {
        result = "Rock 🪨"
    } else if(play == 2) {
        result = "Paper 🧻"
    } else if(play == 3) {
        result = "Scissors ✂️"
    } else {
        result = "✖️INVALID OPTION✖️"
    }
    return result
}
//VARIABLES
let player = 0
let pc = 0
let trumps = 0
let losses = 0
let draw = 0

while (trumps < 3 && losses < 3) {
    //PLAYERS
    pc = random(1,3)
    player = prompt("Choose: 1 for ROCK 🪨, 2 for PAPER 🧻 and 3 for SCISSORS ✂️")
    
    //ELECCION
    alert("The PLAYER Chose " + choice(player))
    alert("The PC Chose " + choice(pc))

    //COMBAT
    if(player == pc) {
    alert("DRAW 🤝")
        draw = draw + 1
    } else if(player == 1 && pc == 3) {
        alert("YOU WIN 🎉")
        trumps = trumps + 1
    } else if(player == 2 && pc == 1) {
        alert("YOU WIN 🎉")
        trumps = trumps + 1
    } else if(player == 3 && pc == 2) {
        alert("YOU WIN 🎉")
        trumps = trumps + 1
    } else {
        alert("YOU LOSE 🥲")
        losses = losses + 1
    }
}
alert("You Win 🎉 " + trumps + " times. You Lose 🥲 " + losses + " times. Draw 🤝 " + draw + " times.")