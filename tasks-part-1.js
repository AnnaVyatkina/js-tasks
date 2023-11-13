//1. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//minMax([2, 3, 1, 5, 4]) ➞ [1, 5]
//minMax([1]) ➞ [1, 1]
function minMax(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    return [arr[0], arr[arr.length - 1]];
}
//or
let minMax = (arr) => {
    let arr1 = [];
    arr1.push(Math.min(...arr));
    arr1.push(Math.max(...arr));
    return arr1;
};
//2. Create a function that returns true if the first array can be nested inside the second and false otherwise. arr1 can be nested inside arr2 if: arr1's min is greater than arr2's min. arr1's max is less than arr2's max.
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
function canNest(arr1, arr2) {
    return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}
//3. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
//getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
let getVoteCount = (votes) => votes.upvotes - votes.downvotes;
//4. When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is: RT = R1 + R2 + R3 ... Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).
//seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
function seriesResistance(arr) {
    let sum = 0;
    arr.forEach(function (elem) {
        sum += elem;
    });
    return sum + ' ohms';
}
//5. Create a function that takes two arrays and insert the second array in the middle of the first array. 
// tuckIn([15, 150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
function tuckIn(arr1, arr2) {
    return [arr1[0], ...arr2, arr1[1]];
}
//6. Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//numberSplit(10) ➞ [5, 5]
function numberSplit(n) {
    return [Math.floor(n / 2), Math.ceil(n / 2)];
}
//7. Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
let filterArray = arr => arr.filter(elem => typeof (elem) !== "string" && elem >= 0);
//8. Create a function that returns an array of strings sorted by length in ascending order.
//sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
//sortByLength([]) ➞ []
let sortByLength = arr => arr.sort(function (a, b) {
    return a.length - b.length;
});
//9. Create a function that takes in an array of numbers and returns the sum of its cubes.
// sumOfCubes([3, 4, 5]) ➞ 216
function sumOfCubes(nums) {
    let sum = 0;
    nums.forEach(function (elem) {
        sum += elem ** 3;
    });
    return sum;
}
//10. Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
//getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
//getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
function getOnlyEvens(nums) {
    return nums.filter(elem => elem % 2 === 0 && nums.indexOf(elem) % 2 === 0);
}
//11. Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
//isAvgWhole([1, 3]) ➞ true
//isAvgWhole([1, 2, 3, 4]) ➞ false
function isAvgWhole(arr) {
    let sum = 0;
    arr.forEach(function (elem) {
        sum += elem;
    });
    return Number.isInteger(sum / arr.length);
}
//12. Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
//getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
function getAbsSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += Math.abs(elem);
    }
    return sum;
}
//13. Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
//sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
function sortNumsAscending(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
//14. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]