<h2>Project 0: An explanation</h2>

<p>Materialize CSS inserted its own readme into this file, so I've left it in at the bottom of this page.</p>

<p>This readme explains various aspects of Project 0, which is an early version of a portfolio "about me" page. I'll cover the following items:</p>
<ol>
  <li>Technologies used</li>
  <li>Process and approach</li>
  <li>Unsolved problems</li>
  <li>Biggest wins and challenges</li>
</ol>
  
<h4>1. Technologies used</h4>
<p>In building this project, I used the following technologies:</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Materialize CSS</li>
  <li>JavaScript</li>
  <li>jQuery</li>
  <li>Font Awesome icons</li>
</ul>
<p>With regard to CSS, I used a combination of Materialize CSS and Flexbox. Materialize did a lot of the heavy lifting in some regards (especially with the carousel and lightbox features), but it also took a fair amount of tinkering before I got it to work and appear the way I wanted to.</p>

<h4>2. Process and approach</h4>
<p>I tried to approach this project in a methodical and systematic way. I started out by wireframing and sketching a basic layout. I wanted to keep the layout and feature set simple because as a first project, it will no doubt be revised, reworked, and exploded multiple times. I also wanted to make sure that the project met all of the requirements. Thus, simplicity was my main guiding principle. I stuck to a very basic layout (header with top nav and hero, content sections, and a footer).</p>

<p>After settling on a layout, I started building the page's structure in semantic HTML. I started with the large main sections (header, main, footer) and then filled those in with child divs that more-or-less conformed to the constraints that are required by Materialize and Flexbox. After I had the main HTML sections in place, I added some basic content placeholders, and links for importing the  various libraries, frameworks, and fonts.</p>

<p>On Friday, I added and styled content for the header and the main section. I also started on the JS file. My entire Friday was spent working on the nav links, hero image, carousel, and lightbox. Most of Saturday was spent working on/troubleshooting/implementing a solution for getting the testimonials to fade in and out on a timer. I also started working on the footer content, and started writing this readme.</p>

<h4>3. Unsolved problems</h4>
<p>The page has some odd side effects that occur, but I think it's because I'm a newbie when it comes to Materialize, JS, and jQuery. I'll list the main things I noticed here:</p>
<ul>
  <li>When I click an item in the carousel to lightbox it, the top of the card is hidden by the top nav even though the card is set to a z-index of 1000 (at a higher level than the nav) and an opacity of 1.</li>
  <li>Another lightbox issue: if I lightbox a carousel item and the Testimonials section is showing, the testimonials fade in and out on top of the lightboxed card.</li>
  <li>Because of the way I implemented the fade in/fade out interval, the testimonials take longer to load than I'd like.</li>
</ul>

<h4>4. Biggest wins and challenges</h4>
<p>Biggest wins...</p>
<ul>
  <li>Getting the testimonials to load into the page dynamically by using JS and jQuery, and then figuring out how to get them to fade in and out. It's not perfect, but it works.</li>
  <li>Figuring out how to override Materialize's CSS settings.</li>
</ul>
<p>Biggest challenges...</p>
  <li>Struggling to understand why I couldn't get the setInterval method to work by iterating through an object using the for(keys in object) loop. I still don't really understand why using for(keys in object) doesn't work. Maybe the iteration occurs too quickly, while in the method that I ended up using, which I found on Stack Overflow, extracts an array that you iterate through with each interval rather than setting up a for loop. I should probably try to understand what exactly happens with setInterval() in jQuery.</li>
  <li>Learning how to work with and adjust Materialize's built-in components and definitions. It makes some things very easy, and other things very difficult. Ultimately, though, it seems that the CSS can be customized. I'm not sure about the JS components. </li>



<p align="center">
  <a href="http://materializecss.com/">
    <img src="http://materializecss.com/res/materialize.svg" width="150">
  </a>

  <h3 align="center">MaterializeCSS</h3>

  <p align="center">
    Materialize, a CSS Framework based on material design.
    <br>
    <a href="http://materializecss.com/"><strong>-- Browse the docs --</strong></a>
    <br>
    <br>
    <a href="https://travis-ci.org/Dogfalo/materialize">
      <img src="https://travis-ci.org/Dogfalo/materialize.svg?branch=master" alt="Travis CI badge">
    </a>
    <a href="https://badge.fury.io/js/materialize-css">
      <img src="https://badge.fury.io/js/materialize-css.svg" alt="npm version badge">
    </a>
    <a href="https://cdnjs.com/libraries/materialize">
      <img src="https://img.shields.io/cdnjs/v/materialize.svg" alt="CDNJS version badge">
    </a>
    <a href="https://david-dm.org/Dogfalo/materialize">
      <img src="https://david-dm.org/Dogfalo/materialize/status.svg" alt="dependencies Status badge">
      </a>
    <a href="https://david-dm.org/Dogfalo/materialize#info=devDependencies">
      <img src="https://david-dm.org/Dogfalo/materialize/dev-status.svg" alt="devDependency Status badge">
    </a>
    <a href="https://gitter.im/Dogfalo/materialize">
      <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter badge">
    </a>
</p>

## Table of Contents
- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [Supported Browsers](#supported-browsers)
- [Changelog](#changelog)
- [Testing](#testing)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Quickstart:
Read the [getting started guide](http://materializecss.com/getting-started.html) for more information on how to use materialize.

- [Download the latest release](https://github.com/Dogfalo/materialize/releases/latest) of materialize directly from GitHub.
- Clone the repo: `git clone https://github.com/Dogfalo/materialize.git`
- Include the files via [cdnjs](https://cdnjs.com/libraries/materialize). More [here](http://materializecss.com/getting-started.html).
- Install with [npm](https://www.npmjs.com): `npm install materialize-css`
- Install with [Bower](https://bower.io): `bower install materialize` ([DEPRECATED](https://bower.io/blog/2017/how-to-migrate-away-from-bower/))
- Install with [Atmosphere](https://atmospherejs.com): `meteor add materialize:materialize`

## Documentation
The documentation can be found at <http://materializecss.com>. To run the documentation locally on your machine, you need [Node.js](https://nodejs.org/en/) installed on your computer.

### Running documentation locally
Run these commands to set up the documentation:

```bash
git clone https://github.com/Dogfalo/materialize
cd materialize
npm install
```

Then run `grunt monitor` to compile the documentation. When it finishes, open a new browser window and navigate to `localhost:8000`. We use [BrowserSync](https://www.browsersync.io/) to display the documentation.

### Documentation for previous releases
Previous releases and their documentation are available for [download](https://github.com/Dogfalo/materialize/releases).

## Supported Browsers:
Materialize is compatible with:

- Chrome 35+
- Firefox 31+
- Safari 9+
- Opera
- Edge
- IE 11+

## Changelog
For changelogs, check out [the Releases section of materialize](https://github.com/Dogfalo/materialize/releases) or the [CHANGELOG.md](CHANGELOG.md).

## Testing
We use Jasmine as our testing framework and we're trying to write a robust test suite for our components. If you want to help, [here's a starting guide on how to write tests in Jasmine](CONTRIBUTING.md#jasmine-testing-guide).

## Contributing
Check out the [CONTRIBUTING document](CONTRIBUTING.md) in the root of the repository to learn how you can contribute. You can also browse the [help-wanted](https://github.com/Dogfalo/materialize/labels/help-wanted) tag in our issue tracker to find things to do.

## Copyright and license
Code copyright 2017 Materialize. Code released under the MIT license.
