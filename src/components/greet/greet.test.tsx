// To create a virtual dom in react testing library we use Render method

import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('Greet render correctly', () => {
	render(<Greet />);
	const greetElement = screen.getByText(/hello/i);
	expect(greetElement).toBeInTheDocument();
});
