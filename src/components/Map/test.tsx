import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in corrent place', () => {
    const place = {
      id: 1,
      name: 'Rio de Janeiro',
      slug: 'rio de janeiro',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: 2,
      name: 'petropolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Rio de Janeiro/i)).toBeInTheDocument()
    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument()
  })
})
