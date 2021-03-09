// Objective: Find first non-repeating character in a string. If all characters repeat, return '_'
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

/* function firstNotRepeatingChar(str) {
    for(let i = 0; i < str.length; i++) {
        let target = str.charAt(i)
        if(str.indexOf(target, str.indexOf(target) + 1) == -1) {
            return target
        }
    }
    return '_'
} */

// Objective: Return the first duplicate number in an array. If no duplicate, return -1
// References: https://dev.to/seanwelshbrown/find-the-first-duplicate-in-a-javascript-array-5da3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

function firstDuplicate(a) {
    const numSet = new Set()
    for(let i = 0; i < a.length; i++) {
        if(numSet.has(a[i])) return a[i]
        numSet.add(a[i])
    }
    return -1
}