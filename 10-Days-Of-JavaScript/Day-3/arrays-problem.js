/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let sortedNums = nums.sort((a,b) => a - b);
    let largest = sortedNums.pop();
    let secondLargest = 0;
    
    while (true) {
        secondLargest = sortedNums.pop();
        
        if (largest > secondLargest) {
            break;
        }
    }
    
    return secondLargest;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}