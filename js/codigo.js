function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function choice(play) {
    let result = ""
    if(play == 1) {
        result = "Rock ðª¨"
    } else if(play == 2) {
        result = "Paper ð§»"
    } else if(play == 3) {
        result = "Scissors âï¸"
    } else {
        result = "âï¸INVALID OPTIONâï¸"
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
    player = prompt("Choose: 1 for ROCK ðª¨, 2 for PAPER ð§» and 3 for SCISSORS âï¸. If you enter a character other than 1, 2 or 3, you automatically LOSE ð¥²")
    
    //ELECCION
    alert("The PLAYER Chose " + choice(player))
    alert("The PC Chose " + choice(pc))

    //COMBAT
    if(player == pc) {
    alert("DRAW ð¤")
        draw = draw + 1
    } else if(player == 1 && pc == 3) {
        alert("YOU WIN ð")
        trumps = trumps + 1
    } else if(player == 2 && pc == 1) {
        alert("YOU WIN ð")
        trumps = trumps + 1
    } else if(player == 3 && pc == 2) {
        alert("YOU WIN ð")
        trumps = trumps + 1
    } else {
        alert("YOU LOSE ð¥²")
        losses = losses + 1
    }
}
alert("You Win ð " + trumps + " times. You Lose ð¥² " + losses + " times. Draw ð¤ " + draw + " times.")