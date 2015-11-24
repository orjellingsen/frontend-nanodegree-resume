var bio = {
	"name" : "Ørjan Ellingsen",
	"role" : "Front-End Web Developer",
	"welcomeMsg" : "Welcome to my resume",
	"contacts" : {
		"mobile": "111 22 333",
		"email" : "orjellingsen@gmail.com",
		"github" : "orjellingsen",
		"twitter" : "@johndoe",
		"location" : "Bergen, Norway"
	},
	"skills" : ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Github"],
	"bioPic" : "images/fry.jpg"
};
var work = {
	"jobs" : [
		{
			"employer" : "Paradis Barnehage",
			"title" : "Assistent",
			"location" : "Paradis, Bergen",
			"dates" : "2008 - 2011",
			"description" : "Barnehage"
		},
		{
			"employer" : "Kidsa Barnehager",
			"title" : "Assistent",
			"location" : "Øvsttun, Bergen",
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
			"degree" : "vgs",
			"major" : "Allmenn",
			"dates" : "2002 - 2005",
			"location" : "Åsane, Bergen",
			"url" : "http://skole.hfk.no/upihlvgs"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developmer Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Full Stack JavaScript",
			"school" : "TeamTreeHouse",
			"dates" : "2015",
			"url" : "www.teamtreehouse.com"
		}
	]
}
// Display bio
function displayBio () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);
	// Contacts
	$("#header").append(HTMLcontactStart);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
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
			$("#skills").append(formattedSkills);
		}
	}
}
// Display Work
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
// Display Education
function displayEducation () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
// Display Projects
function displayProjects () {
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
// Call functions to display
displayBio();
displayWork();
displayProjects();
displayEducation();
// Show map
$("#mapDiv").append(googleMap);