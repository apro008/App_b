import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import AppText from '../AppText.js';

test('should render the component', () => {
  const { findByText } = render(
    <AppText>
      <Text>Test</Text>
    </AppText>
  );
});
