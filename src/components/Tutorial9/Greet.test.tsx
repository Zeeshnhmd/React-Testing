// TTD: Test Driven Development

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

// Greet should render the test hello and if a name is passed into the Component
// It should render hello followed by the name

test('Greet render Correctly', () => {
	render(<Greet />);
	const textELement = screen.getByText(/hello/i);
	expect(textELement).toBeInTheDocument();
});

test('Greet render with name', () => {
	render(<Greet name="Zeeshan" />);
	const textElement = screen.getByText(/hello zeeshan/i);
	expect(textElement).toBeInTheDocument();
});
