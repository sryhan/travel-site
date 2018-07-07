class Person {

    constructor(fullName, favoriteColor){
        this.name = fullName;
        this.favColor = favoriteColor;
    }

    greet() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
    }

}

// module.exports = Person; #node.js way of exporting

export default Person; //ES6 way of importing 




