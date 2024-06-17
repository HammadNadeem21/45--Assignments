//Q12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var members = ["Hammad", "Salman", "Sameer", "Sufyan"];
var message = "I hope you will be well";
for (var i = 0; i < members.length; i++) {
    console.log("Hello ".concat(members[i], ", ").concat(message));
}
