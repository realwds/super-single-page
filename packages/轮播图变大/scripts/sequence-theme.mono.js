
// Get the Sequence.js element
var sequenceElement = document.getElementById("sequence");

var options = {
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true,
  preloader: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
