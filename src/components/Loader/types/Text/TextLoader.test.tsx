import TextLoader from '@lib/components/Loader/types/Text';
import { render, screen } from '@testing-library/react';

describe('TextLoader component', () => {
  it('should render correctly', () => {
    const message = 'Loading, please wait';
    render(<TextLoader message={message} />);
    const output = screen.getByRole('paragraph');
    expect(output).toBeInTheDocument();
    expect(output).toHaveTextContent(message);
  });
});
