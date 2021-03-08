// Objective: Find first non-repeating character in a string. If all characters repeat, return '_'

function firstNotRepeatingChar(str) {
    for(let i = 0; i < str.length; i++) {
        let target = str.charAt(i)
        if(str.indexOf(target, str.indexOf(target) + 1) == -1) {
            return target
        }
    }
    return '_'
}