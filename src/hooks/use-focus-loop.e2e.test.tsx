import useFocusLoop from './use-focus-loop';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test useFocusLoop:', () => {
  it('should focus the lastFocusableElement and provide focus loop', async () => {
    const user = userEvent.setup();
    const MockElement = (): JSX.Element => {
      const {handleModalBlur, firstFocusableElement, lastFocusableElement} = useFocusLoop();
      return (
        <div>
          <button data-testid={'outer'}>outer</button>
          <div onBlur={handleModalBlur}>
            <button ref={firstFocusableElement}
              data-testid={'first'}
            >
              first
            </button>
            <button
              data-testid={'some'}
            >
              some
            </button>
            <button ref={lastFocusableElement}
              data-testid={'last'}
            >
              last
            </button>
          </div>
        </div>
      );
    };

    render(<MockElement/>);

    expect(screen.getByTestId('last')).toHaveFocus();
    await user.tab();
    expect(screen.getByTestId('first')).toHaveFocus();
    await user.tab();
    expect(screen.getByTestId('some')).toHaveFocus();
    await user.tab();
    expect(screen.getByTestId('last')).toHaveFocus();
    await user.tab({shift: true});
    expect(screen.getByTestId('some')).toHaveFocus();
    await user.tab({shift: true});
    expect(screen.getByTestId('first')).toHaveFocus();
  });
});
