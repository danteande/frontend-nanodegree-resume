/*
This is empty on purpose! Your code to build the resume will go here.

 $("#header#").append()

$("#main").append("Dante Anderson");

var awesomeThoughts = "I am Dante and I am awesome";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome", "fun");
$("#main").append(funThoughts);
*/

var bio = {
"name" : "Dante Anderson",
"role" : "Boss",
"contacts" : [

  {
    "mobile" : "415-488-7818",
    "email" : "dante.anderson@gmail.com",
    "github" : "https://github.com/danteande/",
    "twitter" : "Dante1",
    "location" : "Novato, CA"
  }
],
"welcomeMessage" : "Seeking G4C coding nook",
"skills" : ["charm", "stealth", "project-management", "coding", "web-product-design"],
"picURL" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/0aa/3da/03897df.jpg",
"picURL2" : "http://www.konicaminolta.com/kids/endangered_animals/library/field/img/lion_img01-l.jpg",
display: function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);


  var formattedContact1 = HTMLmobile.replace("%data%",bio.contacts[0].mobile);
  var formattedContact2 = HTMLemail.replace("%data%",bio.contacts[0].email);
  var formattedContact3 = HTMLtwitter.replace("%data%",bio.contacts[0].twitter);
  var formattedContact4 = HTMLgithub.replace("%data%",bio.contacts[0].github);
  var formattedContact5 = HTMLlocation.replace("%data%",bio.contacts[0].location);
  var formattedContactline = formattedContact1 + formattedContact2 + formattedContact3 + formattedContact4 + formattedContact5
  //$("#topContacts").addClass("contactstuff");
  $("#header").append(formattedContactline);
//var list = $("#topContacts").children("li");

// document.getElementsByClassName('flex-item').getElementsByTagName('li');


  //console.log(list);


  var formattedPicture = HTMLbioPic.replace("%data%",bio.picURL);
  $("#header").append('<div id="biopicture"></div>');
  $("#biopicture").append(formattedPicture);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#biopicture").append(formattedMessage);

    if (bio.skills.length > 0) {
      $("#biopicture").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);

      }
}
}
}

var education = {
"schools" : [
  {
    "name" : "McGill University",
    "location" : "New York, NY",
    "degree": "Bachelor of Commerce",
    "majors" : ["CompSci"],
    "dates" : "1981-1984",
    "url" : "http://www.mcgill.ca"

  },
  {
    "name" : "University of Toronto Schools",
    "location" : "Novato, CA",
    "degree": "High School Diploma",
    "majors" : ["Math", "English"],
    "dates" : "1975-1980",
    "url" : "http://www.utschools.ca/"
  }
],

"onlineCourses" : [
  {
    "title" : "Product Design",
    "school" : "Udacity",
    "date": "March, 2016-April, 2016",
    "url" : "https://classroom.udacity.com/courses/ud509/"

  },
  {
  "title" : "Intro to Java Programming",
  "school" : "Udacity",
  "date": "April, 2016-in progress",
  "url" : "https://classroom.udacity.com/courses/cs046/"

  },
  {
  "title" : "Front-End Web Developer Nanodegree",
  "school" : "Udacity",
  "date": "May, 2016-in progress",
  "url" : "https://classroom.udacity.com/nanodegrees/nd001/"

  }

],
display: function(){

  $.each(education.schools, function(key, value){
    $("#education").append(HTMLschoolStart);
      var formattedSchool = HTMLschoolName.replace("%data%", education.schools[key].name);
      var formattedDate = HTMLschoolDates.replace("%data%", education.schools[key].dates);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);
      formattedSchoolLine = formattedSchool + formattedDegree
      formattedDateLine = formattedDate + formattedLocation;
      $(".education-entry:last").append(formattedSchoolLine);
      $(".education-entry:last").append(formattedDateLine);
      var formattedMajor = "";
      var majortitle = "Major";
      $.each(education.schools[key].majors, function(mkey, value){
        formattedMajor = formattedMajor + HTMLschoolMajor.replace("%data%", education.schools[key].majors[mkey]);
        });
        if (education.schools[key].majors.length > 1)
              var majortitle = "Majors";
              console.log(education.schools[key].majors.length);
        $(".education-entry:last").append("<br>" + majortitle + ": " + formattedMajor);
          });
  $("#education").append(HTMLonlineClasses);
  $.each(education.onlineCourses, function(okey, value){
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[okey].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[okey].school);
      formattedTitleLine = formattedTitle + formattedSchool
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[okey].date);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[okey].url);
      $(".online-entry:last").append(formattedTitleLine);
      $(".online-entry:last").append(formattedDates);
      $(".online-entry:last").append(formattedURL);
});



    }


}



var work = {

  "jobs" : [
    {
      "employer" : "SuperUber",
      "title" : "Director/Project Manager",
      "location" : "San Francsico, CA",
      "dates": "July 2014-Present",
      "description" : "Business and Project Management North America"
    },
    {
      "employer" : "Seriosity",
      "title" : "General Manager and Head of Games",
      "location" : "Palo Alto, CA",
      "dates": "June 2010-July 2014",
      "description" : "Serious Game Development for clients including Best Buy and Whole Foods Market"
    }

  ],
  display: function() {
    for (var key in work.jobs) {
      if (work.jobs.hasOwnProperty(key)) {
        jQuery("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);
        jQuery(".work-entry:last").append(formattedEmployerTitle);
        jQuery(".work-entry:last").append(formattedDates);
        jQuery(".work-entry:last").append(formattedDescription);

      }
  }
  }
}

var projects = {

"projects" : [
  {
    "title" : "GDFA",
    "dates": "2014-in progress",
    "description" : "Digital remix of the book, <i>Grateful Dead Family Album</i>",
    "images": [ "https://static.wixstatic.com/media/f808dc_130707e49cc147b4a5d7d352f91e9b84.png/v1/fill/w_1164,h_946,al_c,usm_0.66_1.00_0.01/f808dc_130707e49cc147b4a5d7d352f91e9b84.png","https://static.wixstatic.com/media/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png/v1/fill/w_234,h_290,al_c,usm_0.66_1.00_0.01/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png"
  ]

},
    {
      "title" : "GDFA",
      "dates": "2014-in progress",
      "description" : "Digital remix of the book, <i>Grateful Dead Family Album</i>",
      "images": [ "https://static.wixstatic.com/media/f808dc_130707e49cc147b4a5d7d352f91e9b84.png/v1/fill/w_1164,h_946,al_c,usm_0.66_1.00_0.01/f808dc_130707e49cc147b4a5d7d352f91e9b84.png","https://static.wixstatic.com/media/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png/v1/fill/w_234,h_290,al_c,usm_0.66_1.00_0.01/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png"
    ]

      }
],
display: function(){

$.each(projects.projects, function(key, value){
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
      var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDate);
      $(".project-entry:last").append(formattedDescription);
      //var key = 0;
      $.each(projects.projects[key].images, function(pkey, value){
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[pkey]);
      $(".project-entry:last").append(formattedImage);
      });
    });

}
}

  var map = {

    display: function(){

      $("#mapDiv").append(googleMap);
    }
  }











/*if (bio.skills.length > 0) {

  $("#main").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
}
*/

/*

$("#main").prepend(internationalizeButton);

function inName(inputname){

  //var longname = []
  var longname = inputname.split(" ");
  var firstname = longname[0];
  firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
  var lastname = longname[1];
  lastname = lastname.toUpperCase();
  outputname = firstname + " " + lastname;
  return outputname

  console.log(firstname, lastname, "////", outputname);
}

inName("dante andderson");

*/
bio.display();
work.display();
projects.display();
education.display();
map.display();


/*

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//$("#main").append(education.school);
//$("#main").append(work.position);()

//console.log(work.jobs[key]);
//console.log(formattedEmployerTitle);
//console.log(document.getElementsByClassName('flex-item').length);

//for (var i = 0; i < 9; i++) {
//  console.log(i);
//}
*/
