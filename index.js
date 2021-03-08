// Objective: Find first non-repeating character in a string. If all characters repeat, return '_'
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

function firstNotRepeatingChar(str) {
    for(let i = 0; i < str.length; i++) {
        let target = str.charAt(i)
        if(str.indexOf(target, str.indexOf(target) + 1) == -1) {
            return target
        }
    }
    return '_'
}