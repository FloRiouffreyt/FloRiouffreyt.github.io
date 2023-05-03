# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [HERE](https://www.frontendmentor.io/solutions/interactive-pricing-component-html-css-js-XnVviJIGki)
- Live Site URL: [HERE](https://floriouffreyt.github.io/22_interactive_pricing_component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

First time working with a range input / slider.

Very tricky to style, a big thank you to Alyssa Holland for [this article](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/).
Things to remember: the pseudo-elements '::-webkit-slider-runnable-track' and '::-moz-range-track' for targeting the track, and '::-webkit-slider-thumb' and '::-moz-range-thumb' for the thumb. Always annoying to work for both webkit and mozilla, but hey... I could not test it on Safari, unfortunately.

The trickiest part was actually something I did not notice first, and that was the slider background that was supposed to move with the thumb.
Thing I learned: you can style CSS ":root" custom properties with Javascript! And that's awesome.
--> document.documentElement.style.setProperty('--CUSTOM PROP', 'CUSTOM PROP VALUE')
This is so cool, thanks to Florian Fromager and [this article](https://medium.com/codex/two-different-ways-to-style-pseudo-elements-with-javascript-3d9260d9c61b). Merci!