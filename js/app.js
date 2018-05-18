$( document ).ready(function() {
  console.log("ready to go!");
  $('.carousel').carousel();
});

// Define content objects

var personality = ['trivia aficionado', 'cooking enthusiast', 'avid gamer', 'lyric soprano', 'recovering academic'];

var carouselItems = {
  giffaw: {
    image: 'images\\giffaw.png',
    alt: 'giffaw screen',
    description: 'A fun project for searching and displaying GIFs from Giphy'
  },
  geoquakes: {
    image: 'images\\geoquakes.png',
    alt: 'geoquakes screen',
    description: 'A project that takes earthquake data from the USGS and displays them on a Google map'
  },
  kittyr: {
    image: 'images\\tama.jpg',
    alt: 'tama relaxing on the couch',
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

//
