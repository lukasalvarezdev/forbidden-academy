import { render } from 'src/testUtils'
import Pepe from '@/components/Pepe'

describe('Home page', () => {
  it('Get pepe name', async () => {
    const { findByText } = render(<Pepe pepe="El pepe" />, {})
    expect((await findByText('El pepe')).innerHTML).toBe('El pepe')
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
