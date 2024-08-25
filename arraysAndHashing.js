
// Has Duplicate
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