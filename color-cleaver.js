const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let one = getInput(1);
let two = getInput(2);

if(one === undefined && two === undefined){
    console.log('You need to enter at least one color.')
}else if(isValidPrimary(one) === true && two === undefined){
    console.log('This is not a color you can deconstruct.')
}else if((isValidPrimary(one) === false || isValidPrimary(two) === false) && two !== undefined){
    console.log('One of these colors is not a Primary Color.')
}else if(one !== undefined && two !== undefined){
    console.log(one.toUpperCase() + ' and ' + two.toUpperCase() + ' make ' + colorCombinator(one, two).toLocaleUpperCase() + '.')
}else if(two === undefined){
    console.log('The color ' + one + ' is made with: ' + colorDeconstructor(one) )
}
 
