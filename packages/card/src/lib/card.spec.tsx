import { render } from '@testing-library/react';

import { Card } from '@bibi-ui/card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});
