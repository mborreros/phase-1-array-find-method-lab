// DONE The function should receive 1 argument, an Array of JavaScript Objects
// DONE Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined

// function recordLocator(record) {
// if (record.result === "W") {
//     console.log(record.year)
//     return record.year
// }
// else 
// {return null}
// }

// function superbowlWin(record) {
//     console.log(record.find((record) => {if (record.result === "W") {return record.year}
// }))
// }

function superbowlWin(obj) {
    const result = obj.find(obj => obj.result === "W")
        return (result ? result.year : undefined)
}