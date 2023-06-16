// Question 1 
// new Set([1,1,2,2,3,4]) = 
// Set(4){1,2,3,4}

// Question 2
// [...new Set("referee")].join("")
// a string: 'ref'

// Question 3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// m = 0 : {Array(3), true}
//     1 : {Array(3), false}

function hasDuplicate(arr){
    return !(arr.length === [...new Set(arr)].length)
}

function vowelCount(strg){
const vowels = 'aeiou'
let ans = new Map();
for (let letter of strg){
    if (letter === vowel && !ans.keys(letter)){
        ans.add(letter, 1)
    }

}

return ans;
}

//Checked the solutions here thinking that there was a quicker way and surely we weren't supposed to write a long code... I was wrong it is supposed to be a long code. 

function isVowel(char){
    return 'aeiou'.includes(char);
}

function vowelCount2(strg){
    const mappedVowelCount = new Map();
    const strgLower = strg.toLowerCase();
    for (let letter of strgLower){
        if (isVowel(letter)){
            if (mappedVowelCount.has(letter)){
                mappedVowelCount.set(letter, mappedVowelCount.get(letter)+ 1);
            }
            else{
                mappedVowelCount.set(letter, 1)
            }
        }
    }
    return mappedVowelCount;
}