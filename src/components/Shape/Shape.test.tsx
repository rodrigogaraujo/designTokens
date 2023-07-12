import { render, screen } from '@testing-library/react-native'
import { Shape } from '.'
import { Text } from 'react-native'

describe('components => Shape', () => {
  test('should be able to show shape with "Shape mock"', async () => {
    render(
      <Shape>
        <Text>Shape mock</Text>
      </Shape>
    )
    const shape = screen.getByText('Shape mock')
    expect(shape).toBeTruthy()
  })
})
