/*Q)17  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

 • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
 a message to that person letting them know you’re sorry you can’t invite them to dinner.

 • Print a message to each of the two people still on your list, letting them know they’re still invited.

 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
 of your program.*/


// Exercise:16

 let guest_list:string[] = ["Taha", "Sufyan","Huzaifa"];

/*for(let i = 0; i < guest_list.length; i++){
console.log(`\nDear ${guest_list[i]}\nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
}*/


let absent:string = "Huzaifa";
console.log(`\nUnfortunately, ${absent} can't make it to the dinner.`);

guest_list.splice(2,2,"Adnan")


/*for(let i = 0; i < guest_list.length; i++){
    console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
    }*/


console.log("\nWe found a bigger dinner table!");


// first guest
guest_list.unshift("Salman");

// second guest
let middleGuest = Math.floor(guest_list.length /2)
guest_list.splice(middleGuest, 0, "Sameer");

// third guest
guest_list.push("Ikhlas");



/*for(let i = 0; i<guest_list.length; i++){
console.log(`\nDear ${guest_list[i]}, please join us for dinner. \nThank you`)
}*/

console.log(guest_list);


// Exercise 17
console.log("\nUnfortunately we can not arrange big dinner tablr, only two guests can be invited.");

// remove guest
while(guest_list.length > 2){
let removeGuest:string | undefined = guest_list.pop();
if(removeGuest !== undefined){
console.log(`Sorry, ${removeGuest} we can no invite you.`);
}
}

// print a message to each of the two people still on your list
for(let i = 0; i<guest_list.length; i++ ){
console.log(`Dear ${guest_list} you are invited for a dinner.`);
}

// empty guest list
guest_list.splice(0, guest_list.length);

// print empty guestlist
console.log(guest_list);

