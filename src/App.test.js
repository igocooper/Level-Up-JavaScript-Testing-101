import { hello, add } from './App';

describe('hello', () => {
    it('Should return Hello', () => {
        expect(hello()).toBe('Hello');
    }) ;
});

describe('add', () => {
    it('Should add two numbers', () => {
    expect(add(1,2)).toBe(3);
    expect(add(2,2)).toBe(4);
    expect(add(-3,3)).toBe(0);
    expect(add(-3,-2)).toBe(-5);
    });

    it('Should not add strings', () => {
        expect(add(2, '2')).toBe(null);
        expect(add(3, '33')).toBe(null);
    });

    it('Should not add objects', () => {
        expect(add(2, {2: '2'})).toBe(null);
        expect(add(3, {})).toBe(null);
    });
});

