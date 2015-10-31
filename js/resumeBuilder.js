// $("#main").append("Ørjan");

// [string].replace([old],[new])

// var email ="orjanell@gmail.com";

// var newEmail = "orjellingsen@gmail.com";

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "I am Ørjan and I am AWESOME!"

// var funThoughts =
// 	awesomeThoughts.replace("AWESOME!","FUN");

// $("#main").append(funThoughts);

var name = "Ørjan Ellingsen"
var role = "Front-End Web Developer"

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

