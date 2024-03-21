import { render, screen } from '@testing-library/react';

import { Empty } from './';

const props = {
  title: 'A simple title',
  description: 'A simple description',
};

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('img', {
        name: /Não há ítens no carrinho/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/');

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should not render link when hasLink is not passed', () => {
    render(<Empty {...props} />);

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument();
  });
});
