import {render, screen} from '@testing-library/react';
import SelectList from './select-list';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';
import {HashRouter} from 'react-router-dom';

describe('Component: SelectList', () => {

  it('should render correctly', () => {
    render(
      <HashRouter>
        <SelectList items={[{...mockCamera, id: 1}, {...mockCamera, id: 2}]}/>
      </HashRouter>
    );
    const expression = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.getAllByText(expression)).toHaveLength(2);
  });

  it('should not render in case the items is empty array', () => {
    render(
      <HashRouter>
        <SelectList items={[]}/>
      </HashRouter>
    );
    const expression = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.queryByText(expression)).not.toBeInTheDocument();
  });
});
