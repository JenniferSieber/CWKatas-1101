// www.codewars.com
// KATA 1 6kyu
const arrayDiff = (a, b) => a.filter(number => !b.includes(number)); 

console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,3,4,5],[1]));

// KATA 2 7kyu
const solution = arr => !arr ? [] : arr.sort((a,b) => a-b);

console.log(solution([1, 2, 10, 50, 5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([20, 2, 10]));


// KATA 3 7kyu
const getSum = (a,b) => (a + b) * (Math.abs(a - b) + 1) / 2;

console.log(getSum(-1,2));

