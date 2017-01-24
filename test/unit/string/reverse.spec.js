System.register(["../../../dist/reverse"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var reverse_1;
    return {
        setters: [
            function (reverse_1_1) {
                reverse_1 = reverse_1_1;
            }
        ],
        execute: function () {
            describe('reverse', function () {
                it('reverse a string', function () {
                    expect(reverse_1.reverse('hello world')).toBe('dlrow olleh');
                    expect(reverse_1.reverse(reverse_1.reverse('hello world'))).toBe('hello world');
                });
            });
        }
    };
});
//# sourceMappingURL=reverse.spec.js.map