import { render } from '@testing-library/react';

import  {Button} from '@bibi-ui/button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
