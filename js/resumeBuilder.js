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
			"location" : "Bergen, Norway",
			"dates" : "2008 - 2011",
			"description" : "Barnehage"
		},
		{
			"employer" : "Kidsa Barnehager",
			"title" : "Assistent",
			"location" : "Oslo, Norway",
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
				"http://placehold.it/350x150",
				"http://placehold.it/350x150"
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

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
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

// Contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);

// Work
function displayWork () {
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
}
displayWork();


/*
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {

}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton); 
*/
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

// Show map
$("#mapDiv").append(googleMap);