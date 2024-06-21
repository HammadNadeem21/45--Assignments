// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list:string[] = ["Hammad", "Taha", "Sufyan", "Huzaifa"];

for(let i = 0; i < guest_list.length; i++){
console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
}




// Q-15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

let not_present:string = "Huzaifa";
console.log(`Unfortunately, ${not_present} can't make it to the dinner.`);

let new_guest:string = "Adnan";
guest_list[3]= new_guest;

for(let i = 0; i < guest_list.length; i++){
    console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
    }