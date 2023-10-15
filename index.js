// Code your solution here
function findMatching (arr, string){
    let match = arr.filter((arr) => arr.toUpperCase() === string.toUpperCase())
    debugger
    return match
}

findMatching()

function fuzzyMatch (arr, string) {
    return arr.filter((arr) => arr.startsWith(string)) //startsWith() checks a string to see if string starts with an particular value, filter() loops the array
}

// const matchName = (obj, string) => {    
//     let match = obj.filter((obj)=> obj.string === string )
//     return match
// }

function matchName(arr, string) {
    return arr.filter((arr) => arr.name === string ) // key name is definied in the arr, we have to loop and find the key and compare it to the string
}