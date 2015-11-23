var bio = {
	"name" : "Ørjan Ellingsen",
	"role" : "Front-End Web Developer",
	"welcomeMsg" : "lorem ipsum dolor sit amet etc etc etc.",
	"contacts" : {
		"mobile": "111 22 333",
		"email" : "orjellingsen@gmail.com",
		"github" : "orjellingsen",
		"twitter" : "@johndoe",
		"location" : "Bergen, Norway"
	},
	"skills" : ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"bioPic" : "images/fry.jpg"
};
var work = {
	"jobs" : [
		{
			"employer" : "Paradis Barnehage",
			"title" : "Assistent",
			"location" : "Bergen",
			"dates" : "2008 - 2011",
			"description" : "Barnehage"
		},
		{
			"employer" : "Kidsa Barnehager",
			"title" : "Assistent",
			"location" : "Bergen",
			"dates" : "2011 - Present",
			"description" : "Friluftsbarnehage"
		}
	]
}
var projects = {
	"projects" : [
		{
			"title" : "Portfolio",
			"dates" : "2015",
			"description" : "Portfolio project for Udacity",
			"images" : [
				"http://codepen.io/deve/pen/BoYqWz"
			]
		}
	]
}
var education = {
	"schools" : [
		{
			"name" : "U-Pihl Videregående Skole",
			"city" : "Bergen",
			"degree" : "VGS",
			"major" : "Allmenn",
			"dates" : 2005,
			"url" : "http://skole.hfk.no/upihlvgs"
		}
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"city" : "Online",
			"degree" : "Front End Web Development Nanodegree",
			"dates" : 2015,
			"url" : "www.udacity.com"
		}
	]
}

// Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderName.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);

// BioPic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

// Skills
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i += 1) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#header").append(formattedSkills);
	}
}

// Work
for (job in work.jobs) {
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);

	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);

	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);

	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
}