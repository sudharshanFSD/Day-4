//Printing odd numbers in an array 

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//anonymous function

b = function() {

let c = [];

for (let i = 0; i < a.length; i++) {

//logic

//if remainder of num/2 = 0 => even

//else it is odd

if (a[i] % 2 != 0) {

c.push(a[i]);

}

}

console.log(c);

};

b();

//IIFE Function

(function() {

let c = [];

for (let i = 0; i < a.length; i++) {

if (a[i] % 2 != 0) {

c.push(a[i]);

}

}

console.log(c);

})();

//converting all strings to caps

//anonymous function

b = function(str) {

    var sentence = str.toLowerCase().split(" ");
    
    for (let i = 0; i < sentence.length; i++) {
    
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    
    }
    
    console.log(sentence.join(" "));
    
    return sentence;
    
    }
    
    b("java script is the best");
    
    //IIFE function
    
    (function(str) {
    
    var sentence = str.toLowerCase().split(" ");
    
    for (let i = 0; i < sentence.length; i++) {
    
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    
    }
    
    console.log(sentence.join(" "));
    
    return sentence;
    
    })("java script is the best");

    //sum of all numbers in array

//Anonymous Function

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

b = function() {

let sum = 0;

for (let i = 0; i < a.length; i++) {

sum = sum + a[i];

}

return sum;

}

console.log(b());

//IIFE function

(function() {

let sum = 0;

for (let i = 0; i < a.length; i++) {

sum = sum + a[i];

}

console.log(sum);

})();

// prime numbers in an array

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

//anonymous function

b = function(...a) {

for (let i = 0; i < a.length; i++) {

for (let j = 2; j <= a[i] - 1; j++) {

if (a[i] % j == 0) {

return false;

}

}

return a[i] > 1;

}

};

console.log(a.filter(b));

//IIFE Function

(prime = function(a) {

for (let j = 2; j <= a - 1; j++) {

if (a % j == 0) {

return false;

}

}

return a > 1

})();

console.log(a.filter(prime))

//pallindromes

let arr = ['aha', 'raghu', 'gaag', 'hello', 'jooj', 'kook'];

//anonymous function

let palin = function(arr) {

let c = [];

for (let i = 0; i < arr.length; i++) {

let strarr = arr[i]

//Using reverse() method to reverse the string

let revstr = strarr.split('').reverse().join('');

//comparing the 2 strings and adding the string to array using push if condition satisfies

if (strarr == revstr) {

c.push(strarr);

}

}

console.log(c);

}

palin(arr);

//IIFE function

(function(arr) {

let c = [];

for (let i = 0; i < arr.length; i++) {

let strarr = arr[i]

let revstr = strarr.split('').reverse().join('');

if (strarr == revstr) {

c.push(strarr);

}

}

console.log(c);

})(arr);

//median


let arr1 = [45, 56, 23, 78, 89, 57, 70];

let arr2 = [23, 56, 78, 90, 80, 32, 67];

//anonymous function

let med = function(arr1, arr2) {

let l = arr1.length;

//sorting the arr in ascending order

arr1.sort(function(a, b) { return a - b });

arr2.sort(function(a, b) { return a - b });

console.log(arr1, arr2);

//if array length is even then the avg of middle elements in the array is median

if (arr1.length % 2 === 0) {

console.log((arr1[l / 2] + arr1[l / 2-1]) / 2)

console.log((arr2[l / 2] + arr2[l / 2-1]) / 2)

}

//if lenght is odd then middle term is the median

else {

console.log((arr1[(l - 1) / 2]))

console.log((arr2[(l - 1) / 2]))

}

};

med(arr1, arr2);

//IIFE function

(function(arr1, arr2) {

let l = arr1.length;

//sorting the arr in ascending order

arr1.sort(function(a, b) { return a - b });

arr2.sort(function(a, b) { return a - b });

console.log(arr1, arr2);

//if array length is even then the avg of middle elements in the array is median

if (arr1.length % 2 === 0) {

console.log((arr1[l / 2] + arr1[l / 2-1]) / 2)

console.log((arr2[l / 2] + arr2[l / 2-1]) / 2)

}

//if lenght is odd then middle term is the median

else {

console.log((arr1[(l - 1) / 2]))

console.log((arr2[(l - 1) / 2]))

}

})(arr1, arr2);

//removing duplicates from array

let arr = [1, 2, 2, 2, 4, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 22, 4, 4, 567, 67, 78, 78, 45, 67, 45, 45, 45, 78, 67, 56, 54];

//anonymous function

let dup = function(arr) {

//using set property to remove duplicates

let newarr = [...new Set(arr)];

console.log(newarr);

}

dup(arr);

//IIFE function

(function(arr) {

let newarr = [...new Set(arr)];

console.log(newarr);

})(arr)


// rotating an array ny k times


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k = 3;

//anonymous function

let rot = function(arr) {

for (let i = 0; i < k; i++) {

//using unshift method for adding element at first

//using pop method to remove element at last position

arr.unshift(arr.pop());

}

console.log(arr);

}

rot(arr);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//IIFE function

(function(arr) {

for (let i = 0; i < k; i++) {

//using unshift method for adding element at first

//using pop method to remove element at last position

arr.unshift(arr.pop());

}

console.log(arr);

})(arr);



// arrow functions , second question
//odd numbers in an arrow function()=>{};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Using Arrow function

let odd = (arr) => {

let res = [];

for (let i = 0; i < arr.length; i++) {

if (arr[i] % 2 !== 0) {

res.push(arr[i]);

}

}

return res;

}

console.log(odd(arr));

//coversion to caps

let cap = (str) => {

    var sentence = str.toLowerCase().split(" ");
    
    for (let i = 0; i < sentence.length; i++) {
    
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    
    }
    
    console.log(sentence.join(" "));
    
    }
    
    cap('elon musk is the founder of spacex');



    //some of all numbers in arrow func

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = (a) => {

let s = 0;

for (let i = 0; i < a.length; i++) {

s = s + a[i];

}

return s;

}

console.log(sum(arr));

//prime numbers in an array

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

let prime = (num) => {

for (let j = 2; j < num - 1; j++) {

if (num % j === 0) {

return false;

}

}

return num > 1;

}

console.log(a.filter(prime));

//pallindromes

let arr = ['aha', 'raghu', 'gaag', 'hello', 'jooj', 'kook'];

let palin = (str) => {

revstr = str.split("").reverse().join("");

if (str == revstr) {

return str;

} else {

return false;

}

}

console.log(arr.filter(palin));