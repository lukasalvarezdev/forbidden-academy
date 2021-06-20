import * as React from 'react'
import fetch from 'src/utils/fetch-middleware'

const CoursePage = () => {
  const [state, setstate] = React.useState({
    name: '',
    description: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setstate(course => ({ ...course, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(
      await fetch({
        collection: 'course',
        action: 'POST',
        data: state,
      }),
    )
  }

  return (
    <>
      <h2>hola mundo</h2>
      <button
        onClick={async () =>
          console.log(
            await fetch({
              collection: 'course',
              action: 'GET',
            }),
          )
        }
      >
        click
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="name" />
        <input type="text" onChange={handleChange} name="description" />
        <button>click</button>
      </form>
    </>
  )
}

export default CoursePage
