// JSON containing the information to display on the page
var bio = {
	'name' : 'Ørjan Ellingsen',
	'role' : 'Front-End Web Developer',
	'welcomeMsg' : 'Welcome to my resume',
	'contacts' : {
		'mobile': '111 22 333',
		'email' : 'orjanell@gmail.com',
		'github' : 'orjellingsen',
		'twitter' : '@johndoe',
		'location' : 'Bergen, Norway'
	},
	'skills' : ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Github'],
	'biopic' : 'images/fry.jpg'
};

var work = {
	'jobs' : [
		{
			'employer' : 'MI',
			'title' : 'Summer intern',
			'location' : 'Stavanger, Norway',
			'dates' : 'June 2008 - July 2008',
			'description' : 'I designed a web-portal'
		},
		{
			'employer' : 'Paradis Barnehage',
			'title' : 'Assistant',
			'location' : 'Paradis, Bergen',
			'dates' : 'August 2008 - May 2011',
			'description' : 'Kindergarden'
		},
		{
			'employer' : 'Kidsa Barnehager',
			'title' : 'Assistant',
			'location' : 'Øvsttun, Bergen',
			'dates' : 'September 2011 - Present',
			'description' : 'Kindergarden'
		}
	]
};

var projects = {
	'projects' : [
		{
			'title' : 'About me',
			'dates' : '2015',
			'description' : 'This was the first project that I made during the Udacity FEND course. It is a simple site with a logo and text, made with HTML and CSS.',
			'images' : [
				'images/project2-1.png'
			]
		},
		{
			'title' : 'Portfolio',
			'dates' : '2015',
			'description' : 'This is a project that I made for Front-End Web Developer Nanodegree program on Udacity. The task was to make a responsive portfolio site using HTML, CSS and Bootstrap.',
			'images' : [
				'images/project1-1.png'
			]
		}
	]
};

var education = {
	'schools' : [
		{
			'name' : 'U-Pihl Videregående Skole',
			'city' : 'Bergen',
			'degree' : 'vgs',
			'major' : ['Allmenn'],
			'dates' : '2002 - 2005',
			'location' : 'Åsane, Bergen',
			'url' : 'http://skole.hfk.no/upihlvgs'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Front-End Web Developmer Nanodegree',
			'school' : 'Udacity',
			'dates' : '2015',
			'url' : 'www.udacity.com'
		},
		{
			'title' : 'Full Stack JavaScript',
			'school' : 'TeamTreeHouse',
			'dates' : '2015',
			'url' : 'www.teamtreehouse.com'
		}
	]
};

var data = '%data%';

// Display bio
bio.display = function () {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	$('#header').append(formattedName);

	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$('#header').append(formattedRole);
	// Call function to display top contacts
	bio.displayContacts('topContacts');
	// BioPic - display if it exist
	if (bio.biopic) {
		var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
		$('#header').append(formattedBioPic);
	}
	// Skills - display if they exist
	if (bio.skills.length) {
		$('#header').append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i += 1) {
			var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	}
	// Insert name into title of the page
	$('title').append(' - ' + bio.name);
};

// Display Contacts. Function can be called to display contacts on bottom or top of the page
bio.displayContacts = function (contactsLocation) {
	if (contactsLocation === 'topContacts') {
		$('#header').append(HTMLcontactStart);
	}
	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	$('#' + contactsLocation).append(formattedMobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	$('#' + contactsLocation).append(formattedEmail);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	$('#' + contactsLocation).append(formattedGithub);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	$('#' + contactsLocation).append(formattedLocation);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMsg);
};

// Display Work
work.display = function () {
	for (var job in work.jobs) {
		var thisJob = work.jobs[job];
		// create new div for work experience
		$('#workExperience').append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace(data, thisJob.employer);
		var formattedTitle = HTMLworkTitle.replace(data, thisJob.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedWorkDates = HTMLworkDates.replace(data, thisJob.dates);
		$('.work-entry:last').append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace(data, thisJob.location);
		$('.work-entry:last').append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace(data, thisJob.description);
		$('.work-entry:last').append(formattedWorkDescription);
	}
};

// Display Education
education.display = function () {
	for (var school in education.schools) {
		var thisSchool = education.schools[school];
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace(data, thisSchool.name);
		$('.education-entry:last').append(formattedSchoolName);
		var formattedSchoolDates = HTMLschoolDates.replace(data, thisSchool.dates);
		$('.education-entry:last').append(formattedSchoolDates);
		var formattedSchoolDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
		$('.education-entry:last').append(formattedSchoolDegree);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data, thisSchool.location);
		$('.education-entry:last').append(formattedSchoolLocation);
	}
	$('#education').append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		var thisCourse = education.onlineCourses[course];
		$('#education').append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace(data, thisCourse.title);
		$('.education-entry:last').append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data, thisCourse.school);
		$('.education-entry:last').append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace(data, thisCourse.dates);
		$('.education-entry:last').append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace(data, thisCourse.url);
		$('.education-entry:last').append(formattedOnlineURL);
	}
};

// Display Projects
projects.display = function () {
	for (var project in projects.projects) {
		var thisProject = projects.projects[project];
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace(data, thisProject.title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace(data, thisProject.dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace(data, thisProject.description);
		$('.project-entry:last').append(formattedDescription);
		if (thisProject.images.length) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace(data, thisProject.images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

// Call functions to display
bio.display();
bio.displayContacts('footerContacts');
work.display();
projects.display();
education.display();

// Show map
$('#mapDiv').append(googleMap);

// Scrollspy monitor where you are on the page and focus the nav-buttons
$('body').scrollspy({ target: '#navbar' });
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh');
});

// The following code was borrowed from a post on stackoverflow and modified for my use
function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 750) {
        $('.navbar').addClass('row');
    }
    else {
        if (!init) {
            $('.navbar').removeClass('row');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});