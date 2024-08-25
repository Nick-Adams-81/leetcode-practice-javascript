
// Has Duplicate
/***
 * @param {number[]} nums
 * @return {boolean}
 */
function hasDuplicate(nums) {
    if(nums.length == 0) return false;
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
}

// Has Duplicate test cases
let arr1 = [1,2,3,2,6,] // should return true
let arr2 = [1,2,3,4,5,6] // should return false;
let arr3 = [4,4,4,3,2,1] // should return true;
let arr4 = [] // should return false

console.log(hasDuplicate(arr1));
console.log(hasDuplicate(arr2));
console.log(hasDuplicate(arr3));
console.log(hasDuplicate(arr4));

// Is Anagram
/***
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
function isAnagram(s, t) {
    if(s.length != t.length) return false;
    const countS = {};
    const countT = {};
    for(let i = 0; i < s.length; i++) {
        countS[s[i]] = 1 + (countS[s[i]] || 0);
        countT[t[i]] = 1 + (countT[t[i]] || 0);
    }
    for(let key in countS) {
        if(countS[key] != countT[key]) return false;
    }
    return true;
}

// Is Anagram test cases
// these 2 should return true
let str1 = "hello";
let str2 = "olleh";

// these 2 should be false
let str3 = "world";
let str4 = "worlds";

// these should be true
let str5 = "";
let str6 = "";

// these should be false
let str7 = "ways";
let str8 = "sams";

console.log(isAnagram(str1, str2));
console.log(isAnagram(str3, str4));
console.log(isAnagram(str5, str6));
console.log(isAnagram(str7, str8));

// Two Sum
/***
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if(map.has(comp)) return [i, map.get(comp)];
        map.set(nums[i], i);
    }
}

// Test Cases for two sum
let array1 = [4,5,6,7,8]; // target = 14 output should be [2,4]
let array2 = [5,5] // taregt = 10 output should be [0,1];
let array3 = [2,3,7,10]; // target = 9 output should be [0,2]

console.log(twoSum(array1, 14));
console.log(twoSum(array2, 10));
console.log(twoSum(array3, 9));

