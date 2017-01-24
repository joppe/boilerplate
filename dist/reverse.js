System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var reverse;
    return {
        setters: [],
        execute: function () {
            exports_1("reverse", reverse = function (input) {
                return input.split('').reverse().join('');
            });
        }
    };
});
//# sourceMappingURL=reverse.js.map