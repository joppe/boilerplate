import {Greeter} from './../../src/Greeter';

describe('Greeter', ():void => {
    it('greet', ():void => {
        const g:Greeter = new Greeter('Joppe');

        expect(g.greet()).toBe('Hello Joppe');
    });
});