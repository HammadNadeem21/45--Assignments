// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName:string = "hammad nadeem";


// lowercase
console.log("Lowercase:", personName.toLowerCase());


// uppercase
console.log("Uppercase:", personName.toUpperCase());


// titlecase
// console.log("Titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));

var titleCase = (str: string) => {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};

console.log("Titlecase:", titleCase(personName));