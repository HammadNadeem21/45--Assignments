// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["Taha", "Sufyan", "Huzaifa"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear ".concat(guest_list[i], " \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you"));
}
