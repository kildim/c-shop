import {render, screen} from '@testing-library/react';
import SelectList from './select-list';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';

describe('Component: SelectList', () => {

  it('should render correctly', () => {
    render(
        <SelectList items={[{...mockCamera, id: 1}, {...mockCamera, id: 2}]}/>
    );
    const expression = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.getAllByText(expression)).toHaveLength(2);
  });

  it('should not render in case the items is empty array', () => {
    render(
      <SelectList items={[]}/>
    );
    const expression = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.getByText(expression)).not.toBeInTheDocument()
  });
});
