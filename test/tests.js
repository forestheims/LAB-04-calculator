// IMPORT MODULES under test here:
import { divideFunction } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('divide function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divideFunction(20, 5); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
