// Q)26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
 
// First versio n
let alien_color = "Green";
if(alien_color === "Green"){
    console.log("Alien color is green, player just earned 5 points for shoting the alien.");
}else{
    console.log("Alien color is not green, player earned 10 points");
    
}

// Second version
let alienColor = "Red";
if(alienColor === "Green"){
    console.log("Alien color is green, player just earned 5 points for shoting the alien.");
}else{
    console.log("Alien color is not green, player earned 10 points");
}