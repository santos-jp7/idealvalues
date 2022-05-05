const Solver = require("./lib/solver");

(function(){
    if (typeof process === "object") {
        module.exports = Solver;
    }
    else {
        window.idealValues = Solver;
        global.idealValues = Solver;

        if (typeof define === "function" && define.amd) {
            define("idealValues", [], function () { return Solver; });
        }
    }
})();