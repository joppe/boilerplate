System.register(["../../../dist/pad"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var string;
    return {
        setters: [
            function (string_1) {
                string = string_1;
            }
        ],
        execute: function () {
            describe('pad', function () {
                it('default pads right', function () {
                    expect(string.pad('1', '0', 4)).toBe('1000');
                });
                it('place chars if front of given string', function () {
                    expect(string.pad('1', '0', 4, string.PadType.Left)).toBe('0001');
                });
                it('place chars at the end of a given string', function () {
                    expect(string.pad('1', '0', 4, string.PadType.Right)).toBe('1000');
                });
                it('return the same string if the length is of the desired size', function () {
                    expect(string.pad('1111', '0', 4, string.PadType.Left)).toBe('1111');
                });
                it('return the same string if the length is larger then the desired size', function () {
                    expect(string.pad('foobar', '0', 4, string.PadType.Left)).toBe('foobar');
                });
            });
        }
    };
});
//# sourceMappingURL=pad.spec.js.map