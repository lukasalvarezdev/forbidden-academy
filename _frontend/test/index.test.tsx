import React from 'react'
import {
  render,
  // fireEvent
} from './testUtils'
import { Home } from '../pages/index'

describe('Home page', () => {
  it('matches snapshot', async () => {
    const { findByText } = render(<Home />, {})
    // expect(asFragment()).toMatchSnapshot()
    expect((await findByText('El pepe')).innerHTML).toBe('El pepe')
  })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })
})
