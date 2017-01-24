System.register(["../../../dist/repeat"], function (exports_1, context_1) {
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
            describe('repeat', function () {
                it('repeat the string by a given number', function () {
                    expect(string.repeat('foo', 2)).toBe('foofoo');
                });
                it('repeating an empty string will result in an empty string', function () {
                    expect(string.repeat('', 2)).toBe('');
                });
                it('repeating a string 0 times will result in an empty string', function () {
                    expect(string.repeat('foo', 0)).toBe('');
                });
                it('if a float is passed, cast it to integer', function () {
                    expect(string.repeat('foobar', 3.9)).toBe('foobarfoobarfoobar');
                });
                it('throw an error if the count smaller then zero', function () {
                    expect(function () {
                        string.repeat('foo', -1);
                    }).toThrow();
                });
            });
        }
    };
});
//# sourceMappingURL=repeat.spec.js.map