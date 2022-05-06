const Solver = require("./lib/solver");

(function(){
    if (typeof process === "object") {
        module.exports = Solver;
    }
    else {
        window.idealvalues = Solver;
        global.idealvalues = Solver;

        if (typeof define === "function" && define.amd) {
            define("idealvalues", [], function () { return Solver; });
        }
    }
})();