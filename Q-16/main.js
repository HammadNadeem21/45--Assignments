// Q:16 More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guest_list = ["Taha", "Sufyan", "Huzaifa"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear ".concat(guest_list[i], " \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you"));
}
var not_present = "Huzaifa";
console.log("\nUnfortunately, ".concat(not_present, " can't make it to the dinner."));
guest_list.splice(2, 2, "Adnan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear ".concat(guest_list[i], " \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you"));
}
// Exercise:16
console.log("\nWe found a bigger dinner table!");
// first guest
guest_list.unshift("Salman");
// second guest
var middleGuest = Math.floor(guest_list.length / 2);
guest_list.splice(middleGuest, 0, "Sameer");
// console.log(guest_list);
// third guest
guest_list.push("Ikhlas");
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear ".concat(guest_list[i], ", please join us for dinner. \nThank you"));
}
