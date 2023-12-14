/**
 // * GetByLabelText check if label is present or not.
 // * Suppose if we have multiple element who have same labels text. In this case we can use the "Selector" option to determine which label we want to get tested.
 */

import { render, screen } from '@testing-library/react';
import { GetByLabelText } from '.';

test('Label renders Correctly', () => {
	render(<GetByLabelText />);
	const labelElement1 = screen.getByLabelText('Bio', {
		selector: 'textarea',
	});
	expect(labelElement1).toBeInTheDocument();

	const labelElement2 = screen.getByLabelText('Bio', {
		selector: 'input',
	});
	expect(labelElement2).toBeInTheDocument();

	const placeHolderText = screen.getByPlaceholderText('Bio');
	expect(placeHolderText).toBeInTheDocument();

	const getbytext = screen.getByText('All Elements are mandatory');
	expect(getbytext).toBeInTheDocument();

	const getByDisplayValue = screen.getByDisplayValue('Zeeshan');
	expect(getByDisplayValue).toBeInTheDocument();
});
