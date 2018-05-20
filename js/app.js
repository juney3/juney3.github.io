$( document ).ready(function() {
  console.log("ready to go!");

  //Add carousel functionality from materializecss
  $('.carousel').carousel({
    indicators: true
  });

  //Set carousel to change images every 4 seconds
  // setInterval(function() {
  //   $('.carousel').carousel('next');}, 4000);

  //Add materialbox lightbox plugin functionality from materializecss
   $('.materialboxed').materialbox();
});

// Define content objects
// personality attributes to fade into header
var personality = ['trivia aficionado', 'cooking enthusiast', 'avid gamer', 'lyric soprano', 'recovering academic', 'garment constructor', 'adept researcher'];

// object to hold navbar ids and their corresponding section ids

var navbarItems = {
  navAbout: 'about',
  navProjects: 'projects',
  navTestimonial: 'testimonials',
  navContact: 'contact',
}

// TODO: carouselItems object to implement dynamic addition of projects
var carouselItems = {
  giffaw: {
    image: 'images\\giffaw.png',
    alt: 'giffaw screen',
    title: 'giffaw',
    description: 'A fun project for searching and displaying GIFs from Giphy'
  },
  geoquakes: {
    image: 'images\\geoquakes.png',
    alt: 'geoquakes screen',
    title: 'geoquakes',
    description: 'A project that takes earthquake data from the USGS and displays them on a Google map'
  },
  kittyr: {
    image: 'images\\tama.jpg',
    alt: 'tama relaxing on the couch',
    title: 'kittyr',
    description: "A project that provides cats-as-a-service (CAAS)"
  }
};

var testimonials = {
  Bob: 'This is the fun part. Just relax and let it flow. That easy. Working it up and down, back and forth. Let all these things just sort of happen. Maybe there\'s a happy little waterfall happening over here.',
  Samuel: 'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows.',
  C3PO: 'Oh, he says it\'s nothing, sir. Merely a malfunction. Old data. Pay it no mind.',
  Cthulu: 'Ph\'nglui mglw\'nafh Cthulhu R\'lyeh wgah\'nagl fhtagn. Shugg f\'athg throd vulgtm throdor, naflChaugnar Faugn ch\'oth throdnyth Hastur nog shogg hupadgh ngluiyar geb h\'ah.',
  Hodor: 'Hodor. Hodor HODOR hodor, hodor hodor, hodor. Hodor hodor hodor hodor?! Hodor, hodor.'
};

// Interactive page functions

// On clicking a menu item in the navbar, scroll to the section
$('.mainNav a').click(function() {
  var navbarLink = this.id;
  var sectionId = navbarItems[navbarLink];
  var sectionToScroll = '#'+sectionId;
  console.log($(sectionToScroll));
  $('html, body').animate({
    scrollTop:
      $(sectionToScroll).offset().top - 70}, 'slow');
});

function showTestimonials(testimonials) {
  var quote, person;

  var index = 0;

  var testifiers = Object.keys(testimonials);

  var interval = setInterval(function(){
    person = testifiers[index];
    quote = testimonials[person];

    console.log(`${person}: ${quote}`);

    $('.testimonialQuote').html('<p>\"' + quote + '\"');

    $('.testimonialPerson').html('<p>&mdash; ' + person);

  index++;

    if(index === person.length) {
      index = 0;
    }
  }, 5000);
}

showTestimonials(testimonials);
