// Q:16 More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guest_list = ["Hammad", "Taha", "Sufyan", "Huzaifa"];
// for(let i = 0; i < guest_list.length; i++){
// console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
// }
var not_present = "Huzaifa";
console.log("\nUnfortunately, ".concat(not_present, " can't make it to the dinner."));
var new_guest = "Adnan";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear ".concat(guest_list[i], " \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you"));
}
// Exercise:16
console.log("We found a bigger dinner table!");
// first guest
guest_list.unshift("Salman");
// console.log(guest_list)
// second guest
var middleGuest = "Sameer";
var middleIndex = guest_list.length / 2;
guest_list.splice(middleIndex, 2, "Sameer");
console.log(guest_list);
