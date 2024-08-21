"use strict";
// Q)22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
let errorArray = ["Hammad", 23, "Hamid", 78, 98];
// Produucing Error by accessing invalid index of array
console.log(errorArray[6]);
// Error Removed
console.log(errorArray[3]);
