import { render, screen } from '@testing-library/react-native'
import { Button } from '.'

describe('components => Button', () => {
  test('should be able to show button with "button label"', async () => {
    render(<Button text='Button label' />)
    const button = screen.getByText('Button label')
    expect(button).toBeTruthy()
  })
})
