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
var personalAttributes = ['cooking enthusiast', 'avid gamer', 'lyric soprano', 'recovering academic', 'intermediate sewist', 'adept researcher', 'trivia aficionado'];

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
  'Bob Ross': 'This is the fun part. Just relax and let it flow. That is easy. Working it up and down, back and forth. Let all these things just sort of happen. Maybe there\'s a happy little waterfall happening over here.',
  'Samuel Jackson': 'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows.',
  C3PO: 'Oh, he says it\'s nothing, sir. Merely a malfunction. Old data. Pay it no mind.',
  Cthulu: 'Ph\'nglui mglw\'nafh Cthulhu R\'lyeh wgah\'nagl fhtagn. Shugg f\'athg throd vulgtm throdor, naflChaugnar Faugn ch\'oth throdnyth Hastur nog shogg hupadgh ngluiyar geb h\'ah.',
  Hodor: 'Hodor. Hodor HODOR hodor, hodor hodor, hodor. Hodor hodor hodor hodor?! Hodor, hodor.'
};

// Interactive page functions

// On clicking a menu item in the navbar, scroll to the section
$('.mainNav a').click(function() {
  var section = $(this).attr('href');

  $('html, body').animate({
    scrollTop:
      $(section).offset().top - 70}, 'slow');
});

//Function to iterate through testimonials object and fade in/fade out testimonials
function showTestimonials(testimonials) {
  var quote, person;

  var index = 0;

  var testifiers = Object.keys(testimonials);

  var interval = setInterval(function(){
    person = testifiers[index];
    quote = testimonials[person];

    $('.testimonialContent').fadeIn(5000).delay(2000).fadeOut(3000, function(){
      $('.testimonialQuote').html(`<p>\"${quote}\"`);

      $('.testimonialPerson').html(`<p>&mdash; ${person}`);
    });

    index++;

    if(index === person.length) {
      index = 0;
    }
  }, 10000);
}

//Function to switch out the personality attributes in the header
function switchPersonalAttributes(personalAttributes) {
  var i = 0;

  var switchInterval = setInterval(function(){
    $('#personalAttribute').text(personalAttributes[i]);

    i++;

    if (i === personalAttributes.length) {
      i = 0;
    }
  },6000);
}

showTestimonials(testimonials);

switchPersonalAttributes(personalAttributes);
