import { render, screen } from '@testing-library/react-native'
import { Label } from '.'

describe('components => HeadingSmall', () => {
  test('should be able to show heading small with "heading label"', async () => {
    render(<Label text='Heading label' type='HeadingSmall' />)
    const headingSmall = screen.getByText('Heading label')
    expect(headingSmall).toBeTruthy()
  })
})
