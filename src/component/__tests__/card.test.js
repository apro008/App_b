import { fireEvent } from "@testing-library/react-native";
import React from 'react';
import Card from '../card.js';

test('card should be clickable', () => {
  const mockFn = jest.fn();

    const { findByTestId  } = render(<Card image={''} onPress={mockFn} />);
    
    const button = await findByTestId("button");
    fireEvent.press(button)

    expect(mockFn).toHaveBeenCalled();
});
