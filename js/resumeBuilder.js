var bio = {
	"name" : "Ørjan Ellingsen",
	"role" : "Front-End Web Developer",
	"welcomeMsg" : "Welcome to my resume",
	"contacts" : {
		"mobile": "111 22 333",
		"email" : "orjanell@gmail.com",
		"github" : "orjellingsen",
		"twitter" : "@johndoe",
		"location" : "Bergen, Norway"
	},
	"skills" : ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Github"],
	"bioPic" : ""
};
var work = {
	"jobs" : [
		{
			"employer" : "MI",
			"title" : "Summer intern",
			"location" : "Stavanger, Norway",
			"dates" : "June 2008 - July 2008",
			"description" : "I designed a web-portal"
		},
		{
			"employer" : "Paradis Barnehage",
			"title" : "Assistant",
			"location" : "Paradis, Bergen",
			"dates" : "August 2008 - May 2011",
			"description" : "Kindergarden"
		},
		{
			"employer" : "Kidsa Barnehager",
			"title" : "Assistant",
			"location" : "Øvsttun, Bergen",
			"dates" : "September 2011 - Present",
			"description" : "Kindergarden"
		}
	]
}
var projects = {
	"projects" : [
		{
			"title" : "About me",
			"dates" : "2015",
			"description" : "This was the first project that I made during the Udacity FEND course. It is a simple site with a logo and text, made with HTML and CSS.",
			"images" : [
				"images/project2-1.png"
			]
		},
		{
			"title" : "Portfolio",
			"dates" : "2015",
			"description" : "This is a project that I made for Front-End Web Developer Nanodegree program on Udacity. The task was to make a responsive portfolio site using HTML, CSS and Bootstrap.",
			"images" : [
				"images/project1-1.png"
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
	// Call function to display top contacts
	displayContacts("topContacts");
	// BioPic
	if (bio.bioPic != "") {
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
	}
	// Skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i += 1) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}
	// Insert name into title
	$('title').append('Resume - ' + bio.name);
}

// Display Contacts. Function can be called to display contacts on bottom or top of the page
function displayContacts (contactsLocation) {
	if (contactsLocation === "topContacts") {
		$("#header").append(HTMLcontactStart);
	}
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#" + contactsLocation).append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#" + contactsLocation).append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#" + contactsLocation).append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#" + contactsLocation).append(formattedLocation);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
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
displayContacts('footerContacts');
displayWork();
displayProjects();
displayEducation();

// Show map
$("#mapDiv").append(googleMap);

// Scrollspy monitor where you are on the page and focus the nav-buttons
$('body').scrollspy({ target: '#navbar' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

// Offset the scroll when clicking, to account for the fixed navbar
// This code was borrowed and adapted from an answer on stackoverflow
var offset = 100;

$('#navbar li a').click(function(event) {
	// Update the url with hash section
	window.location.hash = $(this).attr('href')

	event.preventDefault();
	$($(this).attr('href'))[0].scrollIntoView();
	scrollBy(0, -offset);

});
