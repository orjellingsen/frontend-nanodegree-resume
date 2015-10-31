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

var formattedName = HTMLheaderName.replace("%data%", "Ørjan Ellingsen");

var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);
