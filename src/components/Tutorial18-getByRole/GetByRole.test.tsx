/**
 // * We can assign unique ID in getByRole.
 // * For heading tags we can use Level it goes 1 to 6 for   h1 to h6
 // * Check the documentation for more info: https://testing-library.com/docs/queries/byrole/
 */

import { render, screen } from '@testing-library/react';
import { GetByRole } from './GetByRole';

describe('GetByRole', () => {
	test('render correctly', () => {
		render(<GetByRole />);

		const headingElement = screen.getByRole('heading', {
			level: 1,
		});
		expect(headingElement).toBeInTheDocument();

		const sectionElement = screen.getByRole('heading', {
			level: 2,
		});
		expect(sectionElement).toBeInTheDocument();

		const bioElement = screen.getByRole('textbox', {
			name: /bio/i,
		});
		expect(bioElement).toBeInTheDocument();

		const nameElement = screen.getByRole('textbox', {
			name: /name/i,
		});
		expect(nameElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole('combobox');
		expect(jobLocationElement).toBeInTheDocument();

		const checkBoxElement = screen.getByRole('checkbox');
		expect(checkBoxElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole('button');
		expect(submitButtonElement).toBeInTheDocument();
	});
});
