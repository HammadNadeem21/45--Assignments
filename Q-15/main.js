"use strict";
// Q-15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let guest_list = ["Taha", "Sufyan", "Huzaifa"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`);
}
// Exercise:15
let not_present = "Huzaifa";
console.log(`\nUnfortunately, ${not_present} can't make it to the dinner.`);
// new guest add
guest_list.splice(2, 2, "Adnan");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`);
}
