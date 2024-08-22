// Q)24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let apple:string = "Apple";

//Tests for equality
console.log("apple is equal to Apple");
console.log(apple == "Apple");


//Tests for inequality
console.log("apple is not equal to Apple");
console.log(apple != "Apple");


// • Tests using the lower case function
let Name:string = "HAMMAD";
console.log("HAMMAD is equal to hammad after converting to lowercase");
console.log(Name.toLocaleLowerCase()  == "hammad");


console.log("HAMMAD not is equal to hammad after converting to lowercase");
console.log(Name.toLocaleLowerCase()  != "hammad");



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;

//Equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);

//Notequal to
console.log("ten not is equal to twenty");
console.log(ten != twenty);

// Greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);

// Less than
console.log("twenty is less than ten");
console.log(twenty < ten);

// Greater than or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);

// Less than or equal to
console.log("twenty is less than  or equal to ten");
console.log(twenty <= ten);


// • Tests using "and" and "or" operators

// using && operator
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);


// using || (or) operator
console.log("twenty is not equal to twenty and twenty is equal to twenty");
console.log(twenty != twenty || twenty == twenty);

console.log("twenty is less than ten and twenty is not equal to twenty");
console.log(twenty < ten || twenty != twenty);



// • Test whether an item is in a array
let fruits:string[] = ["Orange", "Banana", "Apple"]
console.log("Orange is include in array");
console.log(fruits.includes("Orange"));


// • Test whether an item is not in a array
console.log("Orange is not include in array");
console.log(!fruits.includes("Orange"));

