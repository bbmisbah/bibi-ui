import { render } from '@testing-library/react';

<<<<<<< HEAD
import {Grid} from './grid';
=======
import {Grid} from '@bibi-ui/grid';
>>>>>>> origin/main

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid />);
    expect(baseElement).toBeTruthy();
  });
});
