import { render } from '@testing-library/react';

<<<<<<< HEAD
import {Card} from './card';
=======
import { Card } from '@bibi-ui/card';
>>>>>>> origin/main

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});
