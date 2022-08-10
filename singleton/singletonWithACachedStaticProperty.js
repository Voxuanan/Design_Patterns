class User {
    constructor() {
        // do we have an existing instance?
        if (typeof User.instance === "object") {
            return User.instance;
        }
        // proceed as normal
        this.firstName = "John";
        this.lastName = "Doe";

        // cache
        User.instance = this;

        // implicit return
        // return this;
    }
}

// Usage:
console.log(User); // class doesn't have an instance yet
var curUser = new User();
console.log(curUser.firstName, curUser.lastName); // John Doe
console.log(User); // class got a instance

var other = new User();
console.log(other.firstName, other.lastName); // John Doe
console.log(other === curUser); // true
