import { useCourses } from '../services'
import { WhatYouWillLearnContainer } from '../styles'
import { OkIcon } from '../ui/icons'

const WhatYouWillLearn = () => {
  const { course } = useCourses()

  return (
    <WhatYouWillLearnContainer className="mb-30 normal-shadow info-65 p-20">
      <h3 className="mb-20">What you will learn?</h3>

      {course?.what_you_will_learn.map((item, index) => (
        <p key={index}>
          <OkIcon className="mr-10" />
          {item}
        </p>
      ))}
    </WhatYouWillLearnContainer>
  )
}

export default WhatYouWillLearn
