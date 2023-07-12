import { render, screen } from '@testing-library/react-native'
import { Card } from '.'

describe('components => Card', () => {
  test('should be able to show card with "Card mock"', async () => {
    render(<Card title='Card mock' subtitle='Subtitle' text='Lorem Ipsum is simply dummy ' />)
    expect(screen.getByText('Card mock')).toBeTruthy()
    expect(screen.getByText('Subtitle')).toBeTruthy()
    expect(screen.getByText('Lorem Ipsum is simply dummy ')).toBeTruthy()
  })
})
