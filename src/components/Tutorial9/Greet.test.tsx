// * TTD: Test Driven Development
// * We can use Describe method to wrap test inside "But it works when you run that file only"
// * We can also use .skip, .only method which comes inside test and descride to skip the test, to run that test only.
/**
 * * Tutorial 13: File name conventions 
 // * Files with .test.js or .test.tsx suffix.
 // * Files with .spec.js or .spec.tsx suffix.
 // * Files with .js or .tsx in __test__ folders
 */

/**
	* * Tutorial 14: Code Coverage
  // * A metric that can help you understand how much of your software code is tested
	// * For this we need to add a scrpit in Package.json inside scripts object we are basically extending the test script
	// * Run this command to see code coverage table "npm test -- --coverage". For more info jump to package.json file to the scripts.
	// * Coverage threshold. For more info jump to package.json file to the scripts.
  */

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

// Greet should render the test hello and if a name is passed into the Component
// It should render hello followed by the name

describe('Great', () => {
	test('render Correctly', () => {
		render(<Greet />);
		const textELement = screen.getByText(/hello/i);
		expect(textELement).toBeInTheDocument();
	});

	test('render with name', () => {
		render(<Greet name="Zeeshan" />);
		const textElement = screen.getByText(/hello zeeshan/i);
		expect(textElement).toBeInTheDocument();
	});
});
