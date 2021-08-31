
// list of Formula 1 champions since the year 2000
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]
let winners = {Hamilton:0,
    Rosberg:0,
    Vettel:0,
    Button:0,
    Räikkönen:0,
    Alonso:0,
    Schumacher:0,} ;

function countWin(driver) {
    winners[driver] ++  ; 
    console.log(winners)
    return  winners ; 
}

formula1Champions.forEach(countWin)