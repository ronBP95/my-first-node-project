const myModule = require("./myModule");
const myOtherModule = require("./myOtherModule");
const myThirdModule = require("./myThirdModule")

console.log('Hello World');

const hello = (name) => {
    console.log(`Hello, ${name}`);
}

hello("Link")

console.log(myModule.add(2,2));
console.log(myModule.subtract(5,4));

// my other module
myOtherModule.welcomeToNode();

// my third module
myThirdModule.nodePractice();