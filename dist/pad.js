System.register(["./repeat"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var string, PadType, pad;
    return {
        setters: [
            function (string_1) {
                string = string_1;
            }
        ],
        execute: function () {
            (function (PadType) {
                PadType[PadType["Left"] = 0] = "Left";
                PadType[PadType["Right"] = 1] = "Right";
            })(PadType || (PadType = {}));
            exports_1("PadType", PadType);
            exports_1("pad", pad = function (input, char, length, type) {
                if (type === void 0) { type = PadType.Right; }
                var output = input.toString();
                if (output.length < length) {
                    var count = length - output.length;
                    var affix = string.repeat(char, count);
                    if (PadType.Left === type) {
                        output = affix + output;
                    }
                    else if (PadType.Right === type) {
                        output += affix;
                    }
                }
                return output;
            });
        }
    };
});
//# sourceMappingURL=pad.js.map