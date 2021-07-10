import * as React from 'react'

const ResponsiveBuyCourseCard = () => {
  const pepeRef = React.useRef<HTMLDivElement>(null)

  return (
    <div
      className="normal-shadow mobile-card"
      ref={pepeRef}
      style={{
        top: `calc(100vh - ${pepeRef.current?.clientHeight}px)`,
      }}
    >
      <div className="card-body p-20">
        <h3 className="mb-20 fake-input parse-courses" suppressContentEditableWarning>
          $300
        </h3>

        <div className="mb-20">
          <button className="btn-primary d-b mb-10">Add to cart</button>
          <button className="btn-primary -gray d-b">Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveBuyCourseCard
