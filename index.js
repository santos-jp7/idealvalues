const Solver = require("./lib/solver");

(function(){
    if (typeof process === "object") {
        module.exports = Solver;
    }
    else {
        window.solverJs = Solver;
        global.solverJs = Solver;

        if (typeof define === "function" && define.amd) {
            define("solverJs", [], function () { return Solver; });
        }
    }
})();