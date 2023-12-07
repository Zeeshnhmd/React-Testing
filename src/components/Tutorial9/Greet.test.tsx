// TTD: Test Driven Development
// We can use Describe method to wrap test inside "But it works when you run that file only"
// We can also use .skip, .only method which comes inside test and descride to skip the test, to run that test only

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
