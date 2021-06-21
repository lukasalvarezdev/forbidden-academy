const CourseHeading = () => {
  return (
    <>
      <div>
        <label htmlFor="xd">Title</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="xd">Short description</label>
        <input type="text" name="short_description" />
      </div>
      <div>
        <label htmlFor="xd">Langugage</label>
        <input type="text" name="language" />
      </div>
    </>
  )
}

export default CourseHeading
