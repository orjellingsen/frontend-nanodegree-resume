// JSON containing the information to display on the page
var bio = {
	'name': 'Ørjan Ellingsen',
	'role': 'Front-End Web Developer',
	'welcomeMsg': 'This is my resume. Feel free to contact me',
	'contacts': {
		'mobile': '111 22 333',
		'email': 'orjanell@gmail.com',
		'github': 'orjellingsen',
		'twitter': '@johndoe',
		'location': 'Bergen, Norway'
	},
	'skills': ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Github'],
	'biopic': 'images/biopic.jpg'
};

var work = {
	'jobs': [
		{
			'employer': 'MI',
			'title': 'Summer intern',
			'location': 'Stavanger, Norway',
			'dates': 'June 2008 - July 2008',
			'description': 'I designed a web-portal'
		},
		{
			'employer': 'Paradis Barnehage',
			'title': 'Assistant',
			'location': 'Paradis, Bergen',
			'dates': 'August 2008 - May 2011',
			'description': 'Kindergarden'
		},
		{
			'employer': 'Kidsa Barnehager',
			'title': 'Assistant',
			'location': 'Øvsttun, Bergen',
			'dates': 'September 2011 - Present',
			'description': 'Kindergarden'
		}
	]
};

var projects = {
	'projects' : [
		{
			'title': 'About me',
			'dates': '2015',
			'description': 'This was the first project that I made during the Udacity FEND course. It is a simple site with a logo and text, made with HTML and CSS.',
			'images': [
				'images/project2-1.png'
			]
		},
		{
			'title': 'Portfolio',
			'dates': '2015',
			'description': 'This is a project that I made for Front-End Web Developer Nanodegree program on Udacity. The task was to make a responsive portfolio site using HTML, CSS and Bootstrap.',
			'images': [
				'images/project1-1.png'
			]
		}
	]
};

var education = {
	'schools': [
		{
			'name': 'U-Pihl Videregående Skole',
			'city': 'Bergen',
			'degree': 'vgs',
			'major': ['Allmenn'],
			'dates': '2002 - 2005',
			'location': 'Åsane, Bergen',
			'url': 'http://skole.hfk.no/upihlvgs'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developmer Nanodegree',
			'school': 'Udacity',
			'dates': '2015',
			'url': 'www.udacity.com'
		},
		{
			'title': 'Full Stack JavaScript',
			'school': 'TeamTreeHouse',
			'dates': '2015',
			'url': 'www.teamtreehouse.com'
		}
	]
};

var data = '%data%';

// The letter f in the variable names inside the display functions stands for "formatted"

// Display bio
bio.display = function () {
	var fName = HTMLheaderName.replace(data, bio.name);
	var fRole = HTMLheaderRole.replace(data, bio.role);
	$('#header').append(fName, fRole);
	// BioPic - display if it exist
	if (bio.biopic) {
		var fBiopic = HTMLbioPic.replace(data, bio.biopic);
		$('#header').append(fBiopic);
	}
	// Call function to display top contacts
	bio.displayContacts('topContacts');
	// Skills - display if they exist
	if (bio.skills.length) {
		$('#header').append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i += 1) {
			var fSkills = HTMLskills.replace(data, bio.skills[i]);
			$('#skills').append(fSkills);
		}
	}
	// Welcome Message - display if it exist
	if (bio.welcomeMsg) {
		var fWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMsg);
		$('#header').append(fWelcomeMsg);
	}
	// Insert name into title of the page
	$('title').append(' - ' + bio.name);
};

// Display Contacts. Function can be called to display contacts on bottom or top of the page
bio.displayContacts = function (contactsLocation) {
	if (contactsLocation === 'topContacts') {
		$('#header').append(HTMLcontactStart);
	}
	var fMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	var fEmail = HTMLemail.replace(data, bio.contacts.email);
	var fGithub = HTMLgithub.replace(data, bio.contacts.github);
	var fLocation = HTMLlocation.replace(data, bio.contacts.location);
	var fWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMsg);
	$('#' + contactsLocation).append(fMobile, fEmail, fGithub, fLocation);
};

// Display Work
work.display = function () {
	for (var job in work.jobs) {
		var thisJob = work.jobs[job];
		// create new div for work experience
		$('#workExperience').append(HTMLworkStart);
		// concat employer and title
		var fEmployer = HTMLworkEmployer.replace(data, thisJob.employer);
		var fTitle = HTMLworkTitle.replace(data, thisJob.title);
		var fEmployerTitle = fEmployer + fTitle;
		var fWorkDates = HTMLworkDates.replace(data, thisJob.dates);
		var fWorkLocation = HTMLworkLocation.replace(data, thisJob.location);
		var fWorkDescription = HTMLworkDescription.replace(data, thisJob.description);
		$('.work-entry:last').append(fEmployerTitle, fWorkDates, fWorkLocation, fWorkDescription);
	}
};

// Display Education
education.display = function () {
	for (var school in education.schools) {
		var thisSchool = education.schools[school];
		$('#education').append(HTMLschoolStart);
		var fSchoolName = HTMLschoolName.replace(data, thisSchool.name);
		var fSchoolDates = HTMLschoolDates.replace(data, thisSchool.dates);
		var fSchoolDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
		var fSchoolLocation = HTMLschoolLocation.replace(data, thisSchool.location);
		$('.education-entry:last').append(fSchoolName, fSchoolDates, fSchoolDegree, fSchoolLocation);
	}
	$('#education').append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		var thisCourse = education.onlineCourses[course];
		var fOnlineTitle = HTMLonlineTitle.replace(data, thisCourse.title);
		var fOnlineSchool = HTMLonlineSchool.replace(data, thisCourse.school);
		var fOnlineDates = HTMLonlineDates.replace(data, thisCourse.dates);
		var fOnlineURL = HTMLonlineURL.replace(data, thisCourse.url);
		$('.education-entry:last').append(fOnlineTitle, fOnlineSchool, fOnlineDates, fOnlineURL);
	}
};

// Display Projects
projects.display = function () {
	for (var project in projects.projects) {
		var thisProject = projects.projects[project];
		$('#projects').append(HTMLprojectStart);
		var fTitle = HTMLprojectTitle.replace(data, thisProject.title);
		var fDates = HTMLprojectDates.replace(data, thisProject.dates);
		var fDescription = HTMLprojectDescription.replace(data, thisProject.description);
		$('.project-entry:last').append(fTitle, fDates, fDescription);
		if (thisProject.images.length) {
			for (var image in thisProject.images) {
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