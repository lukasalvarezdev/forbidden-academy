import React from 'react'
import { render } from 'src/testUtils'
import Pepe from '@/components/Pepe'

describe('Home page', () => {
  it('Get pepe name', async () => {
    const { findByText } = render(<Pepe pepe="El pepe" />, {})
    expect((await findByText('El pepe')).innerHTML).toBe('El pepe')
  })
})
