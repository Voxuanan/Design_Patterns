const mySingleton = (function () {
    let instance;
    function init() {
        let number = 0;
        return {
            setNumber: function (x) {
                number = x;
            },
            getNumber: function () {
                return number;
            },
        };
    }

    return {
        getInstance: function () {
            if (!instance) instance = init();
            return instance;
        },
    };
})();

let instA = mySingleton.getInstance();
console.log("instance A: ", instA.getNumber()); // instance A: 0
instA.setNumber(10);
console.log("instance A: ", instA.getNumber()); // instance A: 10

let instB = mySingleton.getInstance();
console.log("instance B: ", instB.getNumber()); // instance B: 10

console.log(instA === instB);
