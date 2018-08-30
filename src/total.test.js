import { total } from './total';

import { add } from './add';

jest.mock('./add', () => ({
    add: jest.fn( () => 25)
}))

// unit test
test('total', () => {
    expect(total(5,20)).toBe('$25');
    expect(add).toHaveBeenCalledTimes(1);

    // example change mock implementation
    add.mockImplementation( () => 30);
    expect(total(5,20)).toBe('$30');
    expect(add).toHaveBeenCalledTimes(2);
});



