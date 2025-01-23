import { render } from '@testing-library/react';

import {Grid} from '@bibi-ui/grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid />);
    expect(baseElement).toBeTruthy();
  });
});
