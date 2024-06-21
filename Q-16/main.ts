
// Exercise:14 
let guest_list:string[] = ["Hammad", "Taha", "Sufyan", "Huzaifa"];

for(let i = 0; i < guest_list.length; i++){
console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
}

// Exercise:15

let not_present:string = "Huzaifa";
console.log(`\nUnfortunately, ${not_present} can't make it to the dinner.`);

let new_guest:string = "Adnan";
guest_list[3]= new_guest;

for(let i = 0; i < guest_list.length; i++){
    console.log(`\nDear ${guest_list[i]} \nyou are invited to dinner. Please join us for an evening of good food and great conversation. \nThank you`)
    }

