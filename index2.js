//task 1

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

let a = 3;
let b = 5;
let c;

let output = `
let a = 3;
let b = 5;
let c;
-----------
a + b =${a + b}
a - b =${a - b}
a * b =${a * b}
a / b =${a / b}
a % b =${a % b}
a += b =${(a += b)}
a -= b =${(a -= b)}
a *= b =${(a *= b)}
a /= b =${(a /= b)}
a %= b =${(a %= b)}
a == b =${a == b}
a != b =${a != b}
a > b =${a > b}
a < b =${a < b}
!a && !c =${!a && !c}
!a || !c =${!a || !c}

`;

console.log(output);

//task 2

let fname = "Harsh";
let lname = "Saini";
let email = "harshsain1871@gmail.com";

let sentence = `my name is ${fname} ${lname} . you can contact me ${email}.`;
console.log(sentence);
