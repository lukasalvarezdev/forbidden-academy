import { render, fireEvent } from 'src/testUtils'
import Header from '@/components/Header'

describe('Home page', () => {
  test('should open the menu', async () => {
    const { findByRole, findByTestId } = render(<Header />, {})

    const menuBtn = await findByRole('menu-btn')
    fireEvent.click(menuBtn)

    const responsiveMenu = await findByTestId('responsive-menu')
    expect(responsiveMenu).toBeTruthy()
  })
})

// describe('Home page', () => {
//   it('matches snapshot', async () => {
//     const { findByText } = render(<Home />, {})
//     // expect(asFragment()).toMatchSnapshot()
//     expect((await findByText('El pepe')).innerHTML).toBe('El pepe')
//   })

//   // it('clicking button triggers alert', () => {
//   //   const { getByText } = render(<Home />, {})
//   //   window.alert = jest.fn()
//   //   fireEvent.click(getByText('Test Button'))
//   //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
//   // })
// })
