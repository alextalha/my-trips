import LinkWrapper from '.'

import { render, screen } from '@testing-library/react'

describe('<LinkWrapper />', () => {
  it('should render without any marker', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    //debug test
    screen.logTestingPlaygroundURL()

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
