$( document ).ready(function() {
  //Define global variables

  //Main Nav Bar variables - for active link
  var mainNavBar = document.getElementById('mainNavBar');

  var navLinks = mainNavBar.getElementsByTagName('a');

  //Carousel interval variable for stopping autoplay
  var carouselInterval;

  //Define content objects

  //Personality attributes to fade into header
  var personalAttributes = ['cooking enthusiast', 'avid gamer', 'lyric soprano', 'recovering academic', 'experienced sewist', 'adept researcher', 'trivia aficionado'];

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

  //Interactive page functions

  //Materialize functions

    //Add carousel functionality from Materialize
    $('.carousel').carousel({
      indicators: true
    });

    //Add materialbox lightbox plugin functionality from Materialize
     $('.materialboxed').materialbox();

     //Add sidenav functionality from Materialize
     $('.sidenav').sidenav();

  //Autoplay carousel
  //Set carousel to change images every 4 seconds
  function runAutoplay() {
    carouselInterval = setInterval(function() {
     $('.carousel').carousel('next');}, 5000);
     $('ul.indicators'
   ).show();
  }

  function stopAutoplay() {
    clearInterval(carouselInterval);
    $('ul.indicators').hide();
  }

  //Set event listener on .carousel-item to listen for mouse enter/mouse leave events. If a mouse enters the item, run stopAutoplay; if the mouse leaves the item, runAutoplay.
  $('.carousel-item').hover(stopAutoplay, runAutoplay);

  //On clicking a menu item in the navbar, scroll gently to the section
  $('.mainNav a').click(function() {
    var section = $(this).attr('href');

    $('html, body').animate({
      scrollTop:
        $(section).offset().top - 70}, 'slow');
  });

//Function to highlight active main nav bar link
  function showHighlighted() {
    for (var i = 0; i < navLinks.length; i++) {
      $('li a').click(function() {
        var current = document.getElementsByClassName('highlighted');

        $(current[0]).removeClass('highlighted');

        $(this).addClass('highlighted');
      })
    }
  }

  //Function to iterate through testimonials object and fade in/fade out testimonials. I found this basic pattern on a comment on Stack Overflow, and am still not sure why it works better than using a for(keys in obj) iteration, though I understand what happens at each point in the code.
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
    }, 6000);
  }

  //Run showTestimonials, switchPersonalAttributes, runAutoplay
  runAutoplay();

  showTestimonials(testimonials);

  switchPersonalAttributes(personalAttributes);

  showHighlighted();

});
