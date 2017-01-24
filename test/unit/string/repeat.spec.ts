import * as string from '../../../dist/repeat';

describe('repeat', ():void => {
    it('repeat the string by a given number', ():void => {
        expect(string.repeat('foo', 2)).toBe('foofoo');
    });

    it('repeating an empty string will result in an empty string', ():void => {
        expect(string.repeat('', 2)).toBe('');
    });

    it('repeating a string 0 times will result in an empty string', ():void => {
        expect(string.repeat('foo', 0)).toBe('');
    });

    it('if a float is passed, cast it to integer', ():void => {
        expect(string.repeat('foobar', 3.9)).toBe('foobarfoobarfoobar');
    });

    it('throw an error if the count smaller then zero', ():void => {
        expect(() => {
            string.repeat('foo', -1);
        }).toThrow();
    });
});
